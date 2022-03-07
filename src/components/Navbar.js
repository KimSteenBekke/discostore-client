import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/albums">
        <button>Albums</button>
      </Link>

      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </nav>
  );
}

export default Navbar;
