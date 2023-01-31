package com.example.backend.models;
import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int movie_id;
    private String movie_name;
    private String sinopsis;
    private String director;
    private int rating;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "classification_id")
    private MovieClasification classification;

    public Movie(int movie_id, String movie_name, String sinopsis, String director, int rating, MovieClasification classification) {
        this.movie_id = movie_id;
        this.movie_name = movie_name;
        this.sinopsis = sinopsis;
        this.director = director;
        this.rating = rating;
        this.classification = classification;
    }

    public Movie() {
    }

    public int getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(int movie_id) {
        this.movie_id = movie_id;
    }

    public String getMovie_name() {
        return movie_name;
    }

    public void setMovie_name(String movie_name) {
        this.movie_name = movie_name;
    }

    public String getSinopsis() {
        return sinopsis;
    }

    public void setSinopsis(String sinopsis) {
        this.sinopsis = sinopsis;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public MovieClasification getClassification() {
        return classification;
    }

    public void setClassification(MovieClasification classification) {
        this.classification = classification;
    }

}


