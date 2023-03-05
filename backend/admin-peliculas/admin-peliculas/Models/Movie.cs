using System;
using System.Collections.Generic;

namespace admin_peliculas.Models;

public partial class Movie
{
    public int MovieId { get; set; }

    public string MovieName { get; set; }

    public string Sinopsis { get; set; }

    public string Director { get; set; }

    public int? Rating { get; set; }

    public DateTime? ReleasedDate { get; set; }

    public string MovieImgUrl { get; set; }

    public int? CategoryId { get; set; }

    public string TrailerUrl { get; set; }

    public virtual Category Category { get; set; }
}
