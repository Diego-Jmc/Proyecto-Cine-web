
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
export default function AppNavbar(){

    return(
      <>
        <Navbar className="nav-container" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={require('../images/logo.png')} alt="logo" className='nav-logo-img'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Link className="nav-link" to='/app/movies'>Peliculas</Link>
              <Link className="nav-link" to='/app/home'>Home</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<div className='hero-info'>
<p className='streaming'>online streaming</p>
<h2> Películas , series y más.</h2>
</div>
</>
    )


}