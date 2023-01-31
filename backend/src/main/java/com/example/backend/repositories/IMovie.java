package com.example.backend.repositories;

import com.example.backend.models.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMovie extends CrudRepository<Movie,Integer> {


}