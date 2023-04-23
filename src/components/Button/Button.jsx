import './Button.css';
import propTypes from 'prop-types';
const Button = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
