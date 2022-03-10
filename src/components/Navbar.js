import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navbar, Nav, Container } from 'react-bootstrap'

function MyNavbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav>
            <Link className="my-nav-link" to="/">
              Home
            </Link>

            <Link className="my-nav-link" to="/albums">
              Albums
            </Link>

            {isLoggedIn && (
              <>
                <Link className="my-nav-link" to="/orders">
                  Orders
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <button className="my-log-out" onClick={logOutUser}>
                  Logout
                </button>
                <span className="my-nav-link">{user && user.name}</span>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Link className="my-nav-link" to="/signup">
                  {' '}
                  Sign Up{' '}
                </Link>

                <Link className="my-nav-link" to="/login">
                  {' '}
                  Login{' '}
                </Link>
              </>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
