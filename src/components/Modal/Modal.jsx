import './Modal.css';
import { Component } from 'react';
import '../../../node_modules/rodal/lib/rodal.css';
import Rodal from 'rodal';

class Modal extends Component {
  state = {
    visible: false,
    imgModal: {},
  };

  componentDidMount() {
    window.addEventListener('click', this.show);
    window.addEventListener('keydown', this.hide);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.show);
    window.removeEventListener('keydown', this.hide);
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

  render() {
    return (
      <Rodal visible={this.state.visible} onClose={this.hide} height={280}>
        <div className="Modal">
          <img
            src={this.state.imgModal.src}
            alt={this.state.imgModal.alt}
            width={680}
            className="img"
          />
        </div>
      </Rodal>
    );
  }
}

export default Modal;
