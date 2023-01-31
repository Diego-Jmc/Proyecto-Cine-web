package com.example.backend.controllers;

import com.example.backend.models.Movie;
import com.example.backend.services.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieController {
    @Autowired
    private IMovieService _service;

   @GetMapping("/movies")
    public List<Movie> getAll(){
       return _service.getAll();
   }

   @GetMapping("/movie/{id}")
   public ResponseEntity getById(@PathVariable(value="id") int movieId){

       System.out.println(movieId);
       Optional<Movie> foundMovie = _service.getById(movieId);
       return foundMovie.isPresent()?  ResponseEntity.ok(foundMovie.get()) : new ResponseEntity<Void>(HttpStatus.NO_CONTENT);

   }

    @PostMapping(
            value = "/movie", consumes = "application/json")
   public ResponseEntity add(@RequestBody Movie movie) {
     return _service.save(movie)? ResponseEntity.ok(movie) :  new ResponseEntity<Void>(HttpStatus.ALREADY_REPORTED);
   }

   @DeleteMapping("/movie/{id}")
    public ResponseEntity deleteMovie(@PathVariable(value = "id") int id){
       _service.delete(id);
       return ResponseEntity.ok("Eliminado");
   }

   @PatchMapping(value = "/movie", consumes = "application/json")

    public ResponseEntity update() throws Exception{
      throw new UnsupportedOperationException("Not implemented yet");
   }



}
