using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ecoommmerce.Models;

namespace ecoommmerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class payController : ControllerBase
    {
          private readonly UserDbContext _context;
            public payController(UserDbContext userDbContext)
            {
                _context = userDbContext;
            }
            [HttpPost("add-pay")]
            public IActionResult Addpay([FromBody] PayModel payObj)
            {
                if (payObj == null)
                {
                    return BadRequest();
                }
                else
                {
                    _context.payModels.Add(payObj);
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Payment Successful!!!!!!!!!"
                    });
                }
            }
            [HttpGet("view-pay")]
            public IActionResult ViewOrder()
            {
                var pay = _context.payModels.AsQueryable();
                if (pay == null)
                {
                    return BadRequest(new
                    {
                        Message = "Payment is not sucessfull"
                    });
                }
                else
                {
                    return Ok(pay);
                }
            }

        }
    }



