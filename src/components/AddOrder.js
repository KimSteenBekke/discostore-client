import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Form } from 'react-bootstrap'

const API_URL = 'https://discostore-server.herokuapp.com'

function AddOrder(props) {
  const [username, setUsername] = useState('')
  const [street, setStreet] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const { albumId } = useParams()
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // We need the project id when creating the new task

    // Create an object representing the body of the POST request
    const requestBody = {
      username,
      street,
      streetNumber,
      city,
      zipCode,
      country,
      albumId,
      quantity,
    }

    const storedToken = localStorage.getItem('authToken')

    axios
      .post(`${API_URL}/api/orders`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setUsername('')
        setStreet('')
        setStreetNumber('')
        setCity('')
        setZipCode('')
        setCountry('')
        setQuantity('')

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshOrder()
      })
      .catch((error) => console.log(error))
  }

  console.log('props: ')
  console.log('userdetails: ', username, street, streetNumber)
  console.log('album ID: ', albumId, useParams())

  return (
    <div className="AddOrder">
      <h3>Add New Order</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br></br>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        

        <label>Street:</label>
        <br></br>
        <textarea
          type="text"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <br></br>
        <br></br>

        <label>Street Number:</label>
        <br></br>
        <textarea
          type="text"
          name="streetNumber"
          value={streetNumber}
          onChange={(e) => setStreetNumber(e.target.value)}
        />
        <br></br>
        <br></br>

        <label>City:</label>
        <br></br>
        <textarea
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br></br>
        <br></br>

        <label>Zip Code:</label>
        <br></br>
        <textarea
          type="text"
          name="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <br></br>
        <br></br>

        <label>Country:</label>
        <br></br>
        <textarea
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br></br>
        <br></br>

        <label>quantity:</label>
        <br></br>
        <textarea
          type="number"
          name="quantity"
          value={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br></br>
        <br></br>

        <button type="submit">Add Order</button>
      </form>
    </div>
  )
}

export default AddOrder
