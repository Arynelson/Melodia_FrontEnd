
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import PropTypes from 'prop-types';

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type=== undefined ? (
        <ItemList
          title="Artistas"
          items={14}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Item List de Músicas */}
      {type === "songs" || type=== undefined ? (
        <ItemList
          title="Músicas"
          items={21}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
Main.propTypes = {
  type: PropTypes.string,
};

export default Main;

