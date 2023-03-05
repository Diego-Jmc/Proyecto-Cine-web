
import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../styles/movie_gallery.css'

export default function MovieGallery(){


    const [movies,setMovies] = useState([])


    function setMoviesFromServer(){
        axios.get('https://localhost:7006/api/Movies/GetAll')
        .then(res=>{
           
            setMovies(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    function getStars(n_stars){


        const stars_array = []

        for (let i = 0; i < n_stars; i++) {
        
            stars_array.push(<div class="five-pointed-star"></div>)
            
        }

        return stars_array

    }

    useEffect(()=>{

        setMoviesFromServer()
        console.log(movies)
    },[])

    function getYear(string_date){
        console.log(string_date)
        const movie_date = Date.parse(string_date)
       

    }


    function getImgUrl(id){
        return `https://localhost:7006/api/Movies/Image/${id}`
    }

    return (
       <Container className="movie-gallery-grid-container">

        {
            movies.map(e=>{
                return(<>
                
                <div className="movie-poster-card">

                <div className="poster-cover">
              
                    <Link to={`/app/movie/${e.movieId}`}>  <button className="open-movie-info-btn">Detalle</button>  </Link>  
                </div>    



                <img src={getImgUrl(e.movieImgUrl)} alt="img"></img>
                <div className="poster-info">
                <h3 className="poster-movie-tittle">{e.movieName}</h3>
                <h4 className="poster-movie-year">AÑO: {getYear(e.releasedDate)}</h4>
                <div className="rating-container"><p>RATING: </p> <div className="stars-container">
                    
                    {
                        getStars(e.rating).map(e=>{
                            return(e)
                        })
                    }
                    
                    </div>
                    
                    </div>

            </div>



        </div>

                
                </>)
            })
        }


       </Container>
    )



}