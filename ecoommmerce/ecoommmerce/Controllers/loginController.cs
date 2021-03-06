using ecoommmerce.Helpers;
using ecoommmerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ecoommmerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly UserDbContext _context;
        private readonly IConfiguration _config;
        public LoginController(UserDbContext userDbContext,IConfiguration config)
        {

            _context = userDbContext;

            _config = config;
        }
        [HttpGet("users")]

        public IActionResult GetUsers()
        {
            var userdetails = _context.userModels.AsQueryable();
            return Ok(userdetails);
        }
        [HttpPost("signup")]

        public IActionResult Signup([FromBody] UserModel userobj)
        {
            if (userobj == null)
            {
                return BadRequest();
            }
            else
            {
                userobj.Password = EncDscPassword.EncryptPassword(userobj.Password);
                _context.userModels.Add(userobj);
                _context.SaveChanges();
         

                return Ok(new
                {
                    statusCode = 200,
                    Message = "user added succesfully"
             
                });
            }


        }
        
        [HttpPost("login")]
        public IActionResult Login([FromBody] UserModel userobj)
        {
            if (userobj == null)
            {
                return BadRequest();
            }
            else { 
          
                

                var user = _context.userModels.Where(x => x.Username == userobj.Username).FirstOrDefault();
                if (user != null && EncDscPassword.DecryptPassword(user.Password)==userobj.Password)
                {
                    var token = GenerateToken(user.Username);
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Loggged in Succesfully",
                        Usertype = user.Usertype,
                        JwtToken = token

                    }) ;
                }
                else
                {
                    return Ok(new
                    {
                        StatusCode = 404,
                        Message = "User not Found"
                    });
                }

            }

        }
        private string GenerateToken(string username)
        {
            var tokenhandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:key"]));

            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.Email, username),
                new Claim("CompanyName", "Shopify"),

            };
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credential);
            return tokenhandler.WriteToken(token);
                
             
        }

    }
}
