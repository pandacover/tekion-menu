import PropTypes from "prop-types";

const Image = ({ image }) => {
    const handleImageError = (e) => {
        e.target.src = "/fallback-image.avif";
    }
    return <img src={image} alt="No Preview" onError={handleImageError} />
}

Image.propTypes = {
    image: PropTypes.string
}

export default Image;