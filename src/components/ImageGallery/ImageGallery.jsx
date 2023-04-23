import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          url={largeImageURL}
          tags={tags}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      largeImageURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
