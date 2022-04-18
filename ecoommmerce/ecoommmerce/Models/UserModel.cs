
using System;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace ecoommmerce.Models
{
    public class UserModel
    {
        [Key]
        public int Id { get; set; }
        public string? Fullname { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string? Mobile { get; set; }

        public string? Usertype { get; set; }

    }
}