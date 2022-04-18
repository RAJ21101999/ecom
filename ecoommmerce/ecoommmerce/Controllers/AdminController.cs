using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ecoommmerce.Models;
using Microsoft.AspNetCore.Http;


namespace ecoommmerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly UserDbContext _context;
        public AdminController(UserDbContext userDbContext)
        {
            _context = userDbContext;
        }




        [HttpPost("add_admin")]

        public IActionResult Addadmin([FromBody] EmployeeAdminModel adminObj)
        {
            try
            {
                if (adminObj == null)
                {
                    return BadRequest();
                }
                else
                {
                    _context.adminModels.Add(adminObj);
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Messsage = "Employee added Successfully"
                    });
                }
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        [HttpPut("update_admin")]
        public IActionResult UpdateEmployee([FromBody] EmployeeAdminModel adminObj)
        {
            if (adminObj == null)
            {
                return BadRequest();
            }
            var user = _context.adminModels.AsNoTracking().FirstOrDefault(x => x.Id == adminObj.Id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User Not Found"
                });
            }
            else
            {
                _context.Entry(adminObj).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Admin Updated Successfully"
                });
            }
        }
        [HttpDelete("delete_admin/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var user = _context.adminModels.Find(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "user not Found"
                });
            }
            else
            {
                _context.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Admin Deleted"
                });
            }
        }
        [HttpGet("get_all_admins")]
        public IActionResult GetAllEmployees()
        {
            var admins = _context.adminModels.AsQueryable();
            return Ok(new
            {
                StatusCode = 200,
                EmployeeDetails = admins
            });
        }
        [HttpGet("get_admin/id")]
        public IActionResult Getemployee(int id)
        {
            var admin = _context.adminModels.Find(id);
            if (admin == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User Not Found"
                });
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    AdminDetail = admin
                });
            }
        }

    }
}