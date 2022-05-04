import "../CSS/FavouriteComponent.css";
import { AiOutlineLeft } from "react-icons/ai";

const FavouriteComponent = () => {
  return (
    <div className="favContainer">
      <section className="favouriteSection__title">
        <AiOutlineLeft className="favouriteSection__title--icon" />
        <h1>Favourite Movies</h1>
        <div></div>
      </section>
    </div>
  );
};

export default FavouriteComponent;
