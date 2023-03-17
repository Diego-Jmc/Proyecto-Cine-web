using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace admin_peliculas.Models;

public partial class MoviesDbContext : DbContext
{
    public MoviesDbContext()
    {
    }

    public MoviesDbContext(DbContextOptions<MoviesDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Movie> Movies { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__category__D54EE9B4608FED4D");

            entity.ToTable("category");

            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("category_name");
        });

        modelBuilder.Entity<Movie>(entity =>
        {
            entity.HasKey(e => e.MovieId).HasName("PK__movie__83CDF74964CFEDC8");

            entity.ToTable("movie");

            entity.Property(e => e.MovieId).HasColumnName("movie_id");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.Director)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("director");
            entity.Property(e => e.MovieImgUrl)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("movie_img_url");
            entity.Property(e => e.MovieName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("movie_name");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.ReleasedDate)
                .HasColumnType("date")
                .HasColumnName("released_date");
            entity.Property(e => e.Sinopsis)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("sinopsis");
            entity.Property(e => e.TrailerUrl)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("trailer_url");

            entity.HasOne(d => d.Category).WithMany(p => p.Movies)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("fk_category");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.PkUserId).HasName("pk_user");

            entity.ToTable("users");

            entity.Property(e => e.PkUserId).HasColumnName("pk_user_id");
            entity.Property(e => e.UserEmail)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("user_email");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("user_password");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
