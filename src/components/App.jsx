import fetchImages from './api/api.js';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import Loader from './Loader/Loader.jsx';
import Modal from './Modal/Modal.jsx';
import '../index.css';
const { Component } = require('react');

class App extends Component {
  state = {
    images: [],
    query: '',
    currentPage: 1,
    onLoad: false,
    visible: false,
    imgModal: {},
  };

  componentDidMount() {
    window.addEventListener('click', this.show);
    window.addEventListener('keydown', this.hide);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.show);
  }

  show = event => {
    if (event.target.nodeName === 'IMG') {
      this.setState({
        visible: true,
        imgModal: { src: event.target.src, alt: event.target.alt },
      });
    }
  };

  hide = () => {
    this.setState({ visible: false });
  };

  closeModal = e => {
    if (e.key === 'Escape') {
      this.setState({ visible: false });
    }
  };

  handleChenge = ({ target: { value } }) => {
    this.setState({ query: value.toLowerCase() });
  };

  normolizeArreyImg = arrey => {
    return arrey.map(({ id, largeImageURL, tags }) => {
      return { id, largeImageURL, tags };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.length === 0) {
      alert('enter data to search');
      return;
    }

    try {
      this.setState({
        onLoad: true,
      });

      fetchImages(this.state.query, 1).then(({ hits }) =>
        this.setState({ images: this.normolizeArreyImg(hits), currentPage: 1 })
      );
    } catch (error) {
      alert(error);
    } finally {
      this.setState({
        onLoad: false,
      });
    }
  };

  hendleClickOnLoadMore = () => {
    try {
      this.setState({
        onLoad: true,
      });

      fetchImages(this.state.query, this.state.currentPage + 1).then(
        ({ hits }) =>
          this.setState(prevState => ({
            images: [...this.state.images, ...this.normolizeArreyImg(hits)],
            currentPage: this.state.currentPage + 1,
          }))
      );
    } catch (error) {
      alert(error);
    } finally {
      this.setState({
        onLoad: false,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Searchbar
          onSubmit={this.handleSubmit}
          handleChenge={this.handleChenge}
          value={this.state.query}
        ></Searchbar>
        {this.state.onLoad && <Loader></Loader>}
        {this.state.images[0] && (
          <>
            <ImageGallery images={this.state.images}></ImageGallery>
            <Button onClick={this.hendleClickOnLoadMore}></Button>
          </>
        )}
        <Modal
          visible={this.state.visible}
          onClose={this.hide}
          img={this.state.imgModal}
        ></Modal>
      </div>
    );
  }
}

export default App;
