import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import { Trash } from 'react-bootstrap-icons';
import '../styles/movie_list.css'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function MovieList() {

    const [movieList, setMovieList] = useState([])
    const [movieToDelete, setMovieToDelete] = useState({ name: '', id: '' })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function getMovies(){
        axios.get('https://localhost:7006/api/Movies/GetAll')
        .then(res => {
            const movies = res.data
            console.log(movies)
            setMovieList(movies)
        })
        .catch(err => {

        })

    }

    useEffect(() => {

        getMovies()
    }, [])

  
    function deleteElement() {

       axios.delete(`https://localhost:7006/api/Movies/Delete/${movieToDelete.id}`)
       .then(res=>{
        setShow(false)
        getMovies()
       })
       .catch(err=>{
        console.log(err)
       })

    }


    function getStars(times) {

        const array = []
        for (let i = 0; i < times; i++) {
            array.push(<div className="five-pointed-star"></div>)
        }

        return array

    }




    return (
        <Container className="movie-list-container">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="movie-list-head-tr">
                        <th>Nombre</th>
                        <th>Director</th>
                        <th>Fecha de lanzamiento</th>
                        <th>Rating</th>
                        <th>Portada</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        movieList.map(e => {
                            return <tr className="movie-list-tr">
                                <td>
                                    <h2>{e.movieName}</h2>
                                    <p>{e.sinopsis}</p>
                                </td>
                                <td>{e.director}</td>
                                <td>{e.releasedDate}</td>
                                <td className="td-rating"><p className="rating-number">{e.rating}</p>

                                    {
                                        getStars(e.rating).map(e => {
                                            return (e)
                                        })

                                    }

                                </td>
                                <td><img className="table-movie-img" alt={e.movieName} src={`https://localhost:7006/api/Movies/Image/${e.movieImgUrl}`} /></td>
                                <td>  <  Trash onClick={() => {
                                    setMovieToDelete({ name: e.movieName, id: e.movieId })
                                    setShow(true)

                                }} className="trash-icon" /></td>

                            </tr>

                        })
                    }


                </tbody>
            </Table>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Pelicula</Modal.Title>
                </Modal.Header>
                <Modal.Body>     Esta seguro que desea eliminar la pelicula: 
                  <strong> { movieToDelete.name} </strong>  </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={deleteElement}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}