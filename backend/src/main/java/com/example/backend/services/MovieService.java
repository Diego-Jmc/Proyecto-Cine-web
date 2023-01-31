package com.example.backend.services;

import com.example.backend.models.Movie;
import com.example.backend.repositories.IMovie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
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
        return _context.findById(id);
    }

    @Override
    public boolean save(Movie m) {
        if (getAll().stream().anyMatch(e -> Objects.equals(e.getMovie_name(), m.getMovie_name())))
            return false;
        else
            _context.save(m); // if not then insert the new one
        return true;
    }


    @Override
    public void delete(int id) {
        _context.deleteById(id);
    }
}
