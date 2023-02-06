package com.example.backend.repositories;

import com.example.backend.models.Movie;
import com.example.backend.models.MovieClasification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMovieClasification extends CrudRepository<MovieClasification,Integer> {

}
