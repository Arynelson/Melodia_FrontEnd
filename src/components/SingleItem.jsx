
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleItem = ({ _id, name, image, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>

        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};
SingleItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string,
  idPath: PropTypes.string.isRequired,
};

export default SingleItem;

