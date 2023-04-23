import './ImageGalleryItem.css';
import propTypes from 'prop-types';
const ImageGalleryItem = ({ url, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
};
