using admin_peliculas.Models;

namespace admin_peliculas.RequestModels
{
    public class MovieRequestModel
    {
  
        public IFormFile MovieImage { get; set; }

        public string Filename { get; set; }

        public string MovieName { get; set; }

        public string Sinopsis { get; set; }

        public string Director { get; set; }

        public int Rating { get; set; }

        public string MovieImgUrl { get; set; }

        public DateTime ReleaseDate { get; set; }

        public int CategoryId { get; set; }

        public string TrailerUrl { get; set; }

        public MovieRequestModel()
        {

        }

        public MovieRequestModel(IFormFile movieImage, string filename, string movieName, string sinopsis, string director, int rating, string movieImgUrl, DateTime releaseDate, int categoryId, string trailerUrl)
        {
            MovieImage = movieImage;
            Filename = filename;
            MovieName = movieName;
            Sinopsis = sinopsis;
            Director = director;
            Rating = rating;
            MovieImgUrl = movieImgUrl;
            ReleaseDate = releaseDate;
            CategoryId = categoryId;
            TrailerUrl = trailerUrl;
        }

        public string toString()
        {
            return $"{MovieName} , director : {Director} fecha {ReleaseDate.ToString()}";

        }

        public Movie GetDbModel()
        {
            return new Movie
            {
                MovieName = MovieName,
                Sinopsis = Sinopsis,
                Director = Director,
                Rating = Rating,
                ReleasedDate = ReleaseDate,
                MovieImgUrl = MovieImgUrl,
                CategoryId = CategoryId,
                TrailerUrl= TrailerUrl,
                
            };
        }


    }
}
