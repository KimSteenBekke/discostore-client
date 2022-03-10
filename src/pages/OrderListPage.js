import { useState, useEffect } from 'react'
import axios from 'axios'

import OrderCard from '../components/OrderCard'

const API_URL = 'https://discostore-server.herokuapp.com'

function OrderListPage() {
  const [orders, setOrders] = useState([])

  const getAllOrders = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/orders`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <div className="OrderListPage">
      {orders.map((order) => (
        <OrderCard key={order._id} {...order} />
      ))}
    </div>
  )
}

export default OrderListPage
