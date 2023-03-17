using admin_peliculas.BLL;
using admin_peliculas.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace admin_peliculas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {

        EncryptMD5 encrypter = new EncryptMD5();

        [HttpPost]
        [Route("[action]")]
        public string LogIn([FromBody]LoginRequest request)
        {
            Console.WriteLine($"el email es {request.Email} y el password {encrypter.Encrypt(request.Password)}");
            return "Hola";
        }



    }
}
