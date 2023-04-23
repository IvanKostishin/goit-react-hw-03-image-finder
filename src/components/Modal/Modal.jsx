import './Modal.css';
import { Component } from 'react';
import '../../../node_modules/rodal/lib/rodal.css';
import Rodal from 'rodal';

class Modal extends Component {
  render() {
    const { img, visible, onClose } = this.props;
    return (
      <Rodal visible={visible} onClose={onClose} height={280}>
        <div className="Modal">
          <img src={img.src} alt={img.alt} width={680} className="img" />
        </div>
      </Rodal>
    );
  }
}

export default Modal;
