using admin_peliculas.Models;
using Microsoft.EntityFrameworkCore;

namespace admin_peliculas.DAL
{
    public class UserRepository : IGenericRepository<User>
    {


        private readonly MoviesDbContext _context;

        public UserRepository(MoviesDbContext context)
        {
            _context = context;
        }

        public async Task<User> CreateAsync(User model)
        {
            await _context.Users.AddAsync(model);
            await _context.SaveChangesAsync();
            return model;
        }

        public async Task<bool> DeleteById(int id)
        {
            var user = _context.Users.Where(e => e.PkUserId == id).FirstOrDefault();
            if(user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<IEnumerable<User>> GetAll()
        {

            return await _context.Users.ToListAsync(); ;
        }

        public Task<User> GetById(int id)
        {
           return _context.Users.FirstAsync(e => e.PkUserId == id);
        }

        public async Task<bool> Update(User model)
        {
           _context.Update(model);
           await _context.SaveChangesAsync();
           return true;
        }
    }
}
