using admin_peliculas.Models;

namespace admin_peliculas.BLL
{
    public interface IUserService
    {

        public Task<bool> CheckExistenceByEmail(string email);

        public Task<bool> CreateUser(User user);

        public Task<User> GetUserByEmail(string email);


            
    }
}
