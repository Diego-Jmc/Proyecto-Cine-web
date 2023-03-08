import '../styles/registration.css'
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const MINUM_DIGITS = 4

export default function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validPassword,setValidPassword] = useState(false)
    const [samePassword,setSamePassword] = useState(false)

  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);

      isValidPassword(event.target.value) ? setValidPassword(true) : setValidPassword(false)

      confirmPassword === event.target.value && event.target.value !== "" ? setSamePassword(true) : setSamePassword(false)
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);

      password === event.target.value && password !== "" ? setSamePassword(true) : setSamePassword(false)

    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  

    
    function isValidPassword(password) {

        if (password.length >= 8) {
            if (hasMinimun(password,MINUM_DIGITS))
               
            return true
        }


        return false

    }

    function hasMinimun(password,minDigits) {

        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

        if (password.length > 0) {

            let counter = 0

            for (let i = 0; i < password.length; i++) {
                if (numbers.some(e => e === password[i]))
                    counter++

            }

            return counter >= minDigits ? true : false
        }

        return false
    }


    return (


        <Container>
  
          <form onSubmit={handleSubmit}>
      <div className='register-form-control'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className='no-border' value={email} onChange={handleEmailChange} required />
      </div>
      <div className='register-form-control' >
        <label htmlFor="password">Password:</label>
        <input className = {validPassword? "valid-password" : "no-border"} type="password" id="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div className='register-form-control'>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input className={samePassword? "valid-password" : "no-border"} type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
      </div>
      <button className = "submit-btn" type="submit">Register</button>
    </form>
        </Container>


    )
}