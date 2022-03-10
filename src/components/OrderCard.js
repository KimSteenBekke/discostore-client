import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'

function OrderCard({ username, street, streetNumber, city, zipCode, country }) {
  const { user, isLoggedIn } = useContext(AuthContext)

  console.log(
    "order data: ",
    username,
    street,
    streetNumber,
    city,
    zipCode,
    country
    
  );
  console.log('user data: ', 
  user)
  ;

  return (
    <div className="OrderCard">
      <h2>Order: {}</h2>
      <h3>Name: {username}</h3>
      <h3>Street: {street}</h3>
      <h3>Street Number: {streetNumber}</h3>
      <h3>City: {city}</h3>
      <h3>ZIP Code: {zipCode}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
}

export default OrderCard
