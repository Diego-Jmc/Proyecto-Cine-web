
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/AppNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovies from './Components/AddMovies';
import MovieList from './Components/MovieList';
export default function App() {


  return (
    <div className="App">
      <BrowserRouter>

        <AppNavbar />


        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path="/addMovies" element={<AddMovies />} />
          <Route path="/listMovies" element={<MovieList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}