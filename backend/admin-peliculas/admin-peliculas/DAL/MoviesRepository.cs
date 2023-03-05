using admin_peliculas.Models;
using Microsoft.EntityFrameworkCore;

namespace admin_peliculas.DAL
{
    public class MoviesRepository : IGenericRepository<Movie>
    {
        private readonly MoviesDbContext _context;
        public MoviesRepository(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<Movie> CreateAsync(Movie model)
        {
            _context.Movies.Add(model);
            await _context.SaveChangesAsync();
            return model;
        }

        public async Task<bool> DeleteById(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                return false;
            }

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Movie>> GetAll()
        {
            return await _context.Movies.ToListAsync();
        }

        public async Task<Movie> GetById(int id)
        {
            return await _context.Movies.FindAsync(id);
        }

        public async Task<bool> Update(Movie model)
        {
            var movie = await _context.Movies.FindAsync(model.MovieId);
            if (movie == null)
            {
                return false;
            }

            movie.MovieName = model.MovieName;
            movie.Sinopsis = model.Sinopsis;
            movie.Director = model.Director;
            movie.Rating = model.Rating;
            movie.ReleasedDate = model.ReleasedDate;
            movie.MovieImgUrl = model.MovieImgUrl;
            movie.CategoryId = model.CategoryId;

            _context.Movies.Update(movie);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
