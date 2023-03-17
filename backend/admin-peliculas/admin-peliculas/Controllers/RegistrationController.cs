using admin_peliculas.BLL;
using admin_peliculas.Models;
using admin_peliculas.RequestModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace admin_peliculas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {

        private readonly IUserService _userService;



        public RegistrationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> RegisterNewUser([FromBody] LoginRequest request)
        {

            EncryptMD5 encrypter = new EncryptMD5();

            if (!await _userService.CheckExistenceByEmail(request.Email))
            {
                User newUser = new User();
                newUser.UserPassword = encrypter.Encrypt(request.Password);
                newUser.UserEmail = request.Email;
                await _userService.CreateUser(newUser);
                return Ok();
            }

            return BadRequest();

        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {

            EncryptMD5 encrypter = new EncryptMD5();

            if (await _userService.CheckExistenceByEmail(request.Email))
            {
           
                var user = await _userService.GetUserByEmail(request.Email);  
                    // Some logic here
                    return Ok(encrypter.DeCrypt(user.UserPassword));
                
            }

            return NoContent();



        }
    }
}