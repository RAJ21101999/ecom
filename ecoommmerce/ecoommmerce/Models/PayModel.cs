using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;

namespace ecoommmerce.Models
{
    public class PayModel
    {
       public string ? cardholdername { get; set; }
        public string ?cardnumber { get; set; }
        public string ?expirydate { get; set; }

        [Key]
        public string ?cvv { get; set; }
    }
}
