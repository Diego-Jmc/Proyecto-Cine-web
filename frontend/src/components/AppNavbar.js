
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
export default function AppNavbar(){

    return(
        <Navbar className="nav-container" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={require('../images/logo.png')} alt="logo" className='nav-logo-img'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='nav-link' href="#home">Peliculas</Nav.Link>
              <Nav.Link className='nav-link' href="#link">Tickets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )


}