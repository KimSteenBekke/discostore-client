import { Link } from 'react-router-dom'
//import AddOrder from './AddOrder'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Card } from 'react-bootstrap'

function AlbumCard({ title, artist, genre, price, imageURL, _id }) {
  const { user, isLoggedIn } = useContext(AuthContext)

  console.log('album data: ', title, artist, genre, price);
  console.log('user data: ', user);

  return (
    <Card style={{ width: '18rem' }}>
    <div className="AlbumCard">
      <h3>{title}</h3>
      <h3>{artist}</h3>
      <h3>{genre}</h3>
      <h3>{price}</h3>
      <img src={imageURL} alt="album cover" />

      {isLoggedIn && (
        <Link to={`/order/${_id}`}>
        <button>Buy</button>
        </Link>
      )}
    </div>
    </Card>
  )
}

export default AlbumCard
