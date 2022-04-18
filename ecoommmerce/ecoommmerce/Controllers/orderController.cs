using ecoommmerce.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ecoommmerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class orderController : ControllerBase
    {
        private readonly UserDbContext _context;
        public orderController(UserDbContext userDbContext)
        {
            _context = userDbContext;
        }
        [HttpPost("add-order")]
        public IActionResult AddOrder([FromBody] OrderModel orderObj)
        {
            if (orderObj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.orderModels.Add(orderObj);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Proceed to Payment"
                });
            }
        }
        [HttpGet("view-order")]
        public IActionResult ViewOrder()
        {
            var order = _context.orderModels.AsQueryable();
            if (order == null)
            {
                return BadRequest(new
                {
                    Message = "Order Not Found"
                });
            }
            else
            {
                return Ok(order);
            }
        }

    }
}
    

