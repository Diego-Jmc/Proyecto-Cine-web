import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import AppNavbar from './components/AppNavbar';
import Movies from './components/Movies';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
function App() {
  return (
    <div className='App'>

<BrowserRouter>
<AppNavbar/>

<Routes>

  <Route path='/' element={<h1>Main</h1>} />
  <Route path="/movies" element={<Movies/>} />
  <Route path='/movie' element={<h1>NO PARAMS</h1>} />
  <Route path="/movie/:id" element={<MovieInfo/>} />
  

</Routes>

</BrowserRouter>
    
    </div>
  
  );
}

export default App;
