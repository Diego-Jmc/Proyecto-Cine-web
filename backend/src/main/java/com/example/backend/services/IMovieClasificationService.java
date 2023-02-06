package com.example.backend.services;

import com.example.backend.models.Movie;

import java.util.List;
import java.util.Optional;

public interface IMovieClasificationService {
    public List<Movie> getAll();
    public Optional<Movie> getById(int id);
    public boolean save(Movie m);
    public void delete(int id);

}
