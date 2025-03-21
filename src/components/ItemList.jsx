
import SingleItem from "./SingleItem";
import { Link , useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(items);
  useLocation();
  // console.log(useLocation());
  const pathname = useLocation().pathname;
  const isHome = pathname === "/";
  let finalItems ;

  finalItems = isHome ?  items :  itemsArray.length ;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>  
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
        
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};
ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  itemsArray: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  idPath: PropTypes.string.isRequired,
};

export default ItemList;

