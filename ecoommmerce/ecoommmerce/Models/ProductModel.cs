using System;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;



namespace ecoommmerce.Models
{
    public class ProductModel
    {
        [Key]
        public int Id { get; set; }
        public string? title { get; set; }

        public int? price { get; set; }

        public string? description { get; set; }

        public string? category { get; set; }

        public string? image { get; set; }
    }
}
