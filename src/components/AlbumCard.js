import { Link } from "react-router-dom";
import AddOrder from "./AddOrder";

function AlbumCard({ title, artist, genre, price, imageURL, _id }) {

   console.log(AlbumCard);
  return (
    <div className="AlbumCard">
      <Link to={`/albums/${_id}`}>
        <h3>{title}</h3>
        <h3>{artist}</h3>
        <h3>{genre}</h3>
        <h3>{price}</h3>
        <img src={imageURL} alt="album cover" />
        <button type="submit">Add Order</button>
      </Link>
    </div>
  );
}

export default AlbumCard;
