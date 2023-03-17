using System;
using System.Collections.Generic;

namespace admin_peliculas.Models;

public partial class User
{
    public int PkUserId { get; set; }

    public string UserEmail { get; set; }

    public string UserPassword { get; set; }
}
