import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function OrderCard({
  username,
  street,
  streetNumber,
  city,
  zipCode,
  country,
  _id,
}) {
  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <div className="OrderCard">
      <h2>Order number: {_id}</h2>
      <h3>Name: {username}</h3>
      <h3>Street: {street}</h3>
      <h3>Street Number: {streetNumber}</h3>
      <h3>City: {city}</h3>
      <h3>ZIP Code: {zipCode}</h3>
      <h3>Country: {country}</h3>
      {isLoggedIn && (
        <Link to={`/order/x/${_id}`}>
          <button>Edit Order</button>
        </Link>
      )}
    </div>
  );
}

export default OrderCard;
