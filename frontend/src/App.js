import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieApp from './components/MovieApp';
import Movies from './components/Movies';
import LogIn from './Pages/LogIn';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import Registration from './Pages/Registration';
function App() {
  return (
    <div className='App'>

<BrowserRouter>


<Routes>

<Route index element={<LogIn/>} />
<Route path='/registration' element={<Registration/>} />

<Route path='/app' element={<MovieApp/>}>


  <Route path="home" element={<h1>Home Page</h1>} />
  <Route path="movies" element={<Movies/>} />
  <Route path='movie' element={<h1>NO PARAMS</h1>} />
  <Route path="movie/:id" element={<MovieInfo/>} />

</Route>



</Routes>

</BrowserRouter>
    
    </div>
  
  );
}

export default App;
