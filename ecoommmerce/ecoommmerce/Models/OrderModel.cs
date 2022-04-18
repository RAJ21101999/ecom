using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;



namespace ecoommmerce.Models
{
    public class OrderModel
    {
        [Key]
        public int ?orderid { get; set; }
       
        public string ?ordername { get; set; }

        public int ?orderprice { get; set; }

        public int ?  orderquantity { get; set; }

        public string ?firstname { get; set; }

        public string ?lastname { get; set; }

        public string ?address { get; set; }

        public string ?number { get; set; }

        public string ?email { get; set; }


    }
}
