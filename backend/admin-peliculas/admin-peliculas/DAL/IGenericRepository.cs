using admin_peliculas.Models;

namespace admin_peliculas.DAL
{
    public interface IGenericRepository<DataModel> where DataModel : class
    {

        public Task<DataModel> CreateAsync(DataModel model);

        public Task<DataModel> GetById(int id);

        public Task<IEnumerable<DataModel>> GetAll();

        public Task<bool> DeleteById(int id);

        public Task<bool> Update(DataModel model);


    }
}
