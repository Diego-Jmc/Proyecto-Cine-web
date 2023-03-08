import '../styles/login.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function LogIn(){
    return (
    <Container className="login-container">
  
        <form className="sing-in-form">
            <div className="form-control-cont">
                <label htmlFor="email-address-input">Email address</label>
                <input id="email-address-input" type="text" />
            </div>

            <div className="form-control-cont">
                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" />
            </div>
            <button className="submit-btn" type="submit" variant="success">Acceder</button>

            <Link to="/registration">Registrarse</Link>
        </form>


    </Container>
   

    )
}