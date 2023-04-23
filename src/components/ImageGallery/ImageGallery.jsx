import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
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
