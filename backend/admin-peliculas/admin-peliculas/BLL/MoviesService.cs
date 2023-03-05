using admin_peliculas.DAL;
using admin_peliculas.Models;
using Microsoft.AspNetCore.Mvc;

namespace admin_peliculas.BLL
{
    public class MoviesService : IMoviesService
    {

        private readonly IGenericRepository<Movie> _moviesRepo;

        public MoviesService(IGenericRepository<Movie> moviesRepo)
        {
            _moviesRepo = moviesRepo;
        }

        public async Task<bool> Add(Movie movie)
        {
            var movies = await GetAllAsList();
            if (movies.Any(e => e.MovieName == movie.MovieName))
                return false;

           await _moviesRepo.CreateAsync(movie);
            return true;
        }

        public async Task<bool> DeleteById(int id)
        {
            return await _moviesRepo.DeleteById(id);
        }

        public async  Task<List<Movie>> GetAllAsList()
        {
            IEnumerable<Movie> movies= await _moviesRepo.GetAll();
            return movies.ToList();
        }

        public async Task<Movie> getById(int id)
        {
           return await _moviesRepo.GetById(id);
        }
    }
}
