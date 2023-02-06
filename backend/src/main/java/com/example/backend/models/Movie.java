package com.example.backend.models;
import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

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

    private String movieImageUrl;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE)
    @Column(name = "launch_date")
    private Date fecha;

    @JsonCreator
    public Movie(int movie_id, String movie_name, String sinopsis, String director, int rating, String movieImageUrl, Date fecha) {
        this.movie_id = movie_id;
        this.movie_name = movie_name;
        this.sinopsis = sinopsis;
        this.director = director;
        this.rating = rating;
        this.movieImageUrl = movieImageUrl;
        this.fecha = fecha;
    }

    public String getMovieImageUrl() {
        return movieImageUrl;
    }

    public void setMovieImageUrl(String movieImageUrl) {
        this.movieImageUrl = movieImageUrl;
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

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}


