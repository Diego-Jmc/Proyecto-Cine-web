import '../styles/login.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function LogIn(){
    return (
    <Container class="login-container">
  
        <form class="sing-in-form">
            <div class="form-control-cont">
                <label for="email-address-input">Email address</label>
                <input id="email-address-input" type="text" />
            </div>

            <div class="form-control-cont">
                <label for="password-input">Password</label>
                <input id="password-input" type="password" />
            </div>
            <button class="submit-btn" type="submit" variant="success">Acceder</button>

            <Link to="/registration">Registrarse</Link>
        </form>


    </Container>
   

    )
}