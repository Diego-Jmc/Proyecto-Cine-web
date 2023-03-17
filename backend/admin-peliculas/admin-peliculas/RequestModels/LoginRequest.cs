namespace admin_peliculas.RequestModels
{
    public class LoginRequest
    {
        public LoginRequest(string email, string password)
        {
            Email = email;
            Password = password;
        }

       public string Email { get; set; }

        public string Password { get; set; }

        public LoginRequest()
        {

        }

    }
}
