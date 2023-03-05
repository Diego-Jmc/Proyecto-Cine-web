using System;
using System.Collections.Generic;

namespace admin_peliculas.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; }

    public virtual ICollection<Movie> Movies { get; } = new List<Movie>();
}
