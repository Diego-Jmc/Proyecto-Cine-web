
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import '../styles/movie_form.css'
import Button from 'react-bootstrap/Button';



export default function AddMovieForm() {


  const [showAddedMovieAlert, setShowAddedMovieAlert] = useState(false)
  const [showNotAddedMovieAlert, setNotAddedMovieAlert] = useState(false)

  const [movie, setMovie] = useState({
    movie_name: '',
    sinopsis: '',
    director: '',
    selected_clasification: 1,
    rating: 1,
    movie_trailer:'',
    launch_date: undefined,
  });

  const [image, setImage] = useState(undefined)


  const handleChangeImg = event => {
    setImage(event.target.files[0])
  }


  const handleChange = event => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value
    });
  };


  function setMessage(show){
    show(true)
    setTimeout(()=>{
      show(false)
    },3000)
  }


  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("MovieImage", image);
    formData.append("Filename", image.name);
    formData.append("MovieName", movie.movie_name);
    formData.append("Sinopsis", movie.sinopsis);
    formData.append("Director", movie.director)
    formData.append("Rating", parseInt(movie.rating))
    formData.append("ReleaseDate", movie.lauch_date)
    formData.append("MovieImgUrl", image.name)
    formData.append("CategoryId", parseInt(movie.selected_clasification))
    formData.append("TrailerUrl",movie.movie_trailer)

    console.log("TRAILER +" + movie.movie_trailer)

    axios.post('https://localhost:7006/api/Movies/Save', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        if (response.status === 200) {

         setMessage(setShowAddedMovieAlert)


         setMovie({
          movie_name: '',
          sinopsis: '',
          director: '',
          selected_clasification: 1,
          rating: 1,
          movie_trailer:'',
          launch_date: undefined,
        })


        }

      })
      .catch(error => {
        setMessage(setNotAddedMovieAlert)
        
      })
  };


  return (

    
    <Form onSubmit={handleSubmit} encType="multipart/form-data" className='add-movie-form'>

      <FormGroup>
        <Label for="movie_name">Movie Name</Label>
        <Input type="text" name="movie_name" id="movie_name" value={movie.movie_name} onChange={handleChange} required />
      </FormGroup>


      <FormGroup>
        <Label for="movie_sinopsis">Sinopsis</Label>
        <Input type='textarea' name='sinopsis' id="movie_sinopsis" value={movie.sinopsis} onChange={handleChange} required  spellCheck={false} />
      </FormGroup>

      <FormGroup>
        <Label for="movie_director">Director</Label>
        <Input type='text' name='director' id='movie_director' value={movie.director} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>

        <Label for="selected_clasification">Clasificacíon</Label>
        <Input type="select" name="selected_clasification" id="selected_clasification" value={movie.selected_clasification} onChange={handleChange}>
          <option value="1" defaultValue>TP</option>
          <option value="2">12+</option>
          <option value="3">15+</option>
          <option value="4">18+</option>
          <option value="5">19X+</option>
        </Input>

      </FormGroup>

      <FormGroup>
        <Label for="selected_rating">Rating (1-5)</Label>
        <Input type='select' id='selected_rating' name='rating' value={movie.rating} onChange={handleChange}>

          <option value="1" defaultValue>1 Estrella</option>
          <option value="2">2 Estrellas</option>
          <option value="3">3 Estrellas</option>
          <option value="4">4 Estrellas</option>
          <option value="5">5 Estrellas</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="trailer">Link del trailer</Label>
        <Input type='text' id='trailer' name='movie_trailer' value={movie.movie_trailer} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Label for="lauch_date">Fecha</Label>
        <Input type='date' id='lauch_date' name='lauch_date' value={movie.launch_date} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <Label for="image_file">Imagen</Label>
        <Input type='file' id='image_file' name='image_file' onChange={handleChangeImg} />
      </FormGroup>


      <Button type="submit" variant="success">Agregar</Button>


      {

        showAddedMovieAlert ? <Alert variant="success" className='form-alert'>
          <Alert.Heading>Se Agrego la pelicula: {movie.movie_name} al servidor</Alert.Heading>
          <p>
            No hubieron incovenientes
          </p>
        </Alert> : ""

      }



      {
        showNotAddedMovieAlert ? <Alert variant="danger" className='form-alert'>
          <Alert.Heading>Hubo un error</Alert.Heading>
          <p>
            No se pudo agregar la pelicula al servidor 
          </p>
        </Alert>
          : <></>

      }




    </Form>
    

    
    
    )

}