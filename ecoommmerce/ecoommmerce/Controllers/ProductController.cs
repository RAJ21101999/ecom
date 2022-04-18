using ecoommmerce.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ecoommmerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly UserDbContext _context;

        public ProductController(UserDbContext productDbContext)
        {

            _context = productDbContext;
        }
        [HttpGet("products")]

        public IActionResult Getproducts()
        {
            var productdetails = _context.productModels.AsQueryable();
            return Ok(productdetails);
        }
        [HttpPost("products")]

        public IActionResult postproducts ([FromBody] ProductModel productobj)
        {
            if (productobj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.productModels.Add(productobj);
                _context.SaveChanges();

                return Ok(new
                {
                    statusCode = 200,
                    Message = "product added succesfully"
                });
            }


        }


        [HttpPut("update_product")]
        public IActionResult UpdateProduct([FromBody] ProductModel productobj)
        {
            if (productobj == null)
            {
                return BadRequest();
            }
            var user = _context.productModels.AsNoTracking().FirstOrDefault(x => x.Id == productobj.Id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Product Not Found"
                });
            }
            else
            {
                _context.Entry(productobj).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Product Updated Successfully"
                });
            }
        }

        [HttpGet("get_all_products")]
        public IActionResult GetAllProducts()
        {
            var products = _context.productModels.AsQueryable();
            return Ok(new
            {
                StatusCode = 200,
                ProductDetails = products
            });
        }

        [HttpDelete("delete_product/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.productModels.Find(id);
            if (product == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "product not Found"
                });
            }
            else
            {
                _context.Remove(product);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Product Deleted"
                });
            }
        }

        [HttpGet("get_product/id")]
        public IActionResult GetProduct(int id)
        {
            var product = _context.productModels.Find(id);
            if (product == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Product Not Found"
                });
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    AdminDetail = product
                });
            }
        }


    }
}
