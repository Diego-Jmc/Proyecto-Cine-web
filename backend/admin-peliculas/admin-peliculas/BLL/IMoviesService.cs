using admin_peliculas.Models;

namespace admin_peliculas.BLL
{
    public interface IMoviesService
    {

        public Task<bool> Add(Movie movie);

        public Task<List<Movie>> GetAllAsList();

        public Task<bool> DeleteById(int id);

        public Task<Movie> getById(int id);


    }
}
