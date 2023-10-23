import classess from "./MeetupItems.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
function MeetupItems(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classess.item}>
      <Card>
        <div className={classess.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classess.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classess.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItems;
