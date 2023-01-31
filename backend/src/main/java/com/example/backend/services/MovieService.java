package com.example.backend.services;

import com.example.backend.models.Movie;
import com.example.backend.repositories.IMovie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService implements IMovieService {


    @Autowired
    private IMovie _context;

    @Override
    public List<Movie> getAll() {
        return (List<Movie>)_context.findAll();
    }

    @Override
    public Optional<Movie> getById(int id) {
        return Optional.empty();
    }

    @Override
    public int save(Movie m) {
        return 0;
    }

    @Override
    public void delete(int id) {

    }
}
