import { Link } from 'react-router-dom'
import AddOrder from './AddOrder'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'

function AlbumCard({ title, artist, genre, price, imageURL, _id }) {
  const { user, isLoggedIn } = useContext(AuthContext)

  return (
    <div className="AlbumCard">
      <h3>{title}</h3>
      <h3>{artist}</h3>
      <h3>{genre}</h3>
      <h3>{price}</h3>
      <img src={imageURL} alt="album cover" />

      {isLoggedIn && (
        <Link to={`/albums/${_id}`}>
          <button type="submit">Add Order</button>
        </Link>
      )}
    </div>
  )
}

export default AlbumCard
