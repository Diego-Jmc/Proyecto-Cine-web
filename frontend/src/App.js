import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <div className='App'>
      <AppNavbar/>
      <Container fluid className='hero-container'>
       
       <div className='hero-info'>
        <p className='streaming'>online streaming</p>
        <h2>Las mejores películas , series y más.</h2>
       </div>

      </Container>
    
    </div>
  
  );
}

export default App;
