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
      <h3>{username}</h3>
      <h3>{street}</h3>
      <h3>{streetNumber}</h3>
      <h3>{city}</h3>
      <h3>{zipCode}</h3>
      <h3>{country}</h3>    
    </div>
  );
}

export default OrderCard
