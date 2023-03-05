import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'


export default function AppNavbar(){
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Administrator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-container">
            <Link to="/addMovies" >Agregar</Link>
            <Link to="/listMovies">Listar</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}