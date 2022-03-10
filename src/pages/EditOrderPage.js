import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://discostore-server.herokuapp.com";

function EditOrderPage(props) {
  const [username, setUsername] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const { orderId } = useParams();
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(
        `${API_URL}/api/orders/${
          (orderId, { headers: { Authorization: `Bearer ${storedToken}` } })
        }`
      )
      .then((response) => {
        const oneOrder = response.data;
        setUsername(oneOrder.username);
        setStreet(oneOrder.street);
        setStreetNumber(oneOrder.streetNumber);
        setCity(oneOrder.city);
        setZipCode(oneOrder.zipCode);
        setCountry(oneOrder.country);
      })
      .catch((error) => console.log(error));
  }, [orderId]);

  const handleFormSubmit = (e) => {    
    e.preventDefault();
    const requestBody = {
      username,
      street,
      streetNumber,
      city,
      zipCode,
      country,
    };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/orders/${orderId}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        navigate(`/orders/${orderId}`);
      });
  };
  
  const deleteOrder = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then(() => {
        navigate("/orders");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditOrderPage">
      <h3>Edit the Order</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        <label>Street Number:</label>
        <input
          type="number"
          name="streetNumber"
          value={streetNumber}
          onChange={(e) => setStreetNumber(e.target.value)}
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label>ZIP Code:</label>
        <input
          type="text"
          name="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <button type="submit">Update Order</button>
      </form>

      <button onClick={deleteOrder}>Delete Order</button>
    </div>
  );
}

export default EditOrderPage;
