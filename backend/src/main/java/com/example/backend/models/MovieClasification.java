package com.example.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name="movie_clasifications")

public class MovieClasification {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String description;


    public MovieClasification(Long id, String description) {
        this.id = id;
        this.description = description;
    }

    public MovieClasification() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}