import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AlbumListPage from "./pages/AlbumListPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate"; 
import IsAnon from "./components/IsAnon";  
import AddOrder from './components/AddOrder'



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/albums" element={<AlbumListPage />} />
        <Route path="/signup" element={<IsAnon><SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /> </IsAnon>} />
        <Route path="/order/:albumId" element={<IsPrivate><AddOrder /> </IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
