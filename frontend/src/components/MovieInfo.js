
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/movie_info.css'
import { Container } from 'react-bootstrap';
export default function MovieInfo() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    function fetchMovieAndSet() {
        axios.get(`https://localhost:7006/api/Movies/Movie/${id}`)
            .then(res => {
                setMovie(res.data)


            })
            .catch(err => {
                console.log(err)
            })
    }

    function getImgUrl(url) {
        return `https://localhost:7006/api/Movies/Image/${url}`
    }


    useEffect(() => {
        fetchMovieAndSet()
    }, [])

    function getStars(n_stars) {


        const stars_array = []

        for (let i = 0; i < n_stars; i++) {

            stars_array.push(<div class="five-pointed-star"></div>)

        }

        return stars_array

    }


    return (

        <Container>

            {
                movie.movieId != undefined? <>
                <div className='movie-hero-container'>
                    <div className='img-container'>
                        <img className="img-poster" src={getImgUrl(movie.movieImgUrl)}></img>
                    </div>
    
                    <div className='movie-info'>
                        <h2>{movie.movieName}</h2>
                        <p className='movie-sinopsis'>{movie.sinopsis}</p>
                        <p><span className='director'>Director:</span> {movie.director}</p>
    
                        <div className='rating-container'>
                            <p>RATING:</p>
    
                            <div className='stars-container'>
    
    
                                {getStars(movie.rating)}
                            </div>
    
                        </div>
    
                        <p className='lauch_date'>
                            Estreno: {movie.releasedDate}
                        </p>
    
                    </div>
    
                </div>
    
               <div className='trailer-container'>
               <h2>Trailer</h2>
               <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.trailerUrl}`} title="YouTube video player"   allowFullScreen></iframe>
               </div>
    </> : <h1 className='not-found'> 404 NOT FOUND</h1>
             }

        </Container>




    )



}