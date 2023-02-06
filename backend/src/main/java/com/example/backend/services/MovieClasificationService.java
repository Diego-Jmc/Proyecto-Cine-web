package com.example.backend.services;
import com.example.backend.models.Movie;
import com.example.backend.repositories.IMovieClasification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieClasificationService implements IMovieClasificationService{

    @Autowired
    private IMovieClasification _context;

    @Override
    public List<Movie> getAll() {
        return null;
    }

    @Override
    public Optional<Movie> getById(int id) {
        return Optional.empty();
    }

    @Override
    public boolean save(Movie m) {
        return false;
    }

    @Override
    public void delete(int id) {

    }
}
