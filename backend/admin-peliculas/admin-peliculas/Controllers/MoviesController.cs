using admin_peliculas.BLL;
using admin_peliculas.Models;
using admin_peliculas.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace admin_peliculas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {

        private readonly IMoviesService _moviesService;

        public MoviesController(IMoviesService moviesService)
        {
            _moviesService = moviesService;
        }


        [HttpGet]
        [Route("Movie/{id}")]
        public async Task<Movie> GetById(int id)
        {
            return await _moviesService.getById(id);    
        }

        [HttpGet]
        [Route("Image/{id}")]
        public IActionResult getMovie(string id)
        {
            string path = Path.Combine(@"C:\AAA", id);

            return PhysicalFile(path, "image/jpeg");

        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<List<Movie>> GetAll()
        {
            return await _moviesService.GetAllAsList();
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _moviesService.DeleteById(id))
                return Ok();

            return NoContent();
        }


        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> UploadMovie([FromForm] MovieRequestModel model)
        {

            var movie = model.GetDbModel();

            bool sucess = await _moviesService.Add(movie);

            if (sucess)
            {

                try
                {

                        string path = Path.Combine(@"C:\AAA", model.Filename);
                        using (Stream stream = new FileStream(path, FileMode.Create))
                        {
                            model.MovieImage.CopyTo(stream);
                        }

                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                    return BadRequest(ex.Message);  

                }

                return Ok();
            }
            else
            {
                return Conflict("Already exits!");
            }

  


        }


    }
}
