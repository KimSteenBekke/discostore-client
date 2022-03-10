import { Link } from 'react-router-dom'
//import AddOrder from './AddOrder'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Card, Button } from 'react-bootstrap'

function AlbumCard({ title, artist, genre, price, imageURL, _id }) {
  const { user, isLoggedIn } = useContext(AuthContext)

  return (
    <>
      <Card style={{ width: '35rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{artist}</Card.Subtitle>
          <Card.Text>{genre}</Card.Text>
          <Card.Text>{price} €</Card.Text>

          <Card.Img src={imageURL} alt="album cover" />

          {isLoggedIn && (
            <Link to={`/order/${_id}`}>
              <Button>Buy</Button>
            </Link>
          )}
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default AlbumCard
