import { Link } from 'react-router-dom'
import { useContext } from 'react' // <== IMPORT
import { AuthContext } from '../context/auth.context' // <== IMPORT

function Navbar() {
  //const { isLoggedIn, user } = useContext(AuthContext)
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/albums">
        <button>Albums</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/orders">
            {" "}
            <button>Orders</button>{" "}
          </Link>
          
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>

          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar
