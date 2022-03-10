import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AlbumListPage from "./pages/AlbumListPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import AddOrder from "./components/AddOrder";
import OrderListPage from "./pages/OrderListPage";
import EditOrderPage from "./pages/EditOrderPage";

function App() {
  return (
    <div className="App">
      <MyNavbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/albums" element={<AlbumListPage />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />{" "}
            </IsAnon>
          }
        />

        <Route exact path="/albums" element={<AlbumListPage />} />

        <Route
          exact
          path="orders"
          element={
            <IsPrivate>
              <OrderListPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/order/:albumId"
          element={
            <IsPrivate>
              <AddOrder />{" "}
            </IsPrivate>
          }
          />

        <Route
          path="/order/x/:orderId"
          element={
            <IsPrivate>
              <EditOrderPage />{" "}
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
