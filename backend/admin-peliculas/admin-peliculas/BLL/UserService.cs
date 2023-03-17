using admin_peliculas.DAL;
using admin_peliculas.Models;

namespace admin_peliculas.BLL
{
    public class UserService : IUserService
    {

        private readonly IGenericRepository<User> _repo;

        public UserService(IGenericRepository<User> repo)
        {
            _repo = repo;
        }

        public async Task<bool> CheckExistenceByEmail(string email)
        {
            var users = await _repo.GetAll();
            return users.Any(e => e.UserEmail == email);
        }

        public async Task<bool> CreateUser(User user)
        {
            if (await CheckExistenceByEmail(user.UserEmail)) 
                return false;
            

            EncryptMD5 encrypter = new EncryptMD5();
            user.UserPassword = encrypter.Encrypt(user.UserPassword);
            await _repo.CreateAsync(user);
            return true;
        }

        public async Task<User> GetUserByEmail(string email)
        {
            var users = await _repo.GetAll();
            return users.Where(e => e.UserEmail == email).FirstOrDefault();

        }
    }
}
