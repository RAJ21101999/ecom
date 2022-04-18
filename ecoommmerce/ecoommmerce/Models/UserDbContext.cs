using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace ecoommmerce.Models
{
    public class UserDbContext : DbContext
    {
        public DbSet<UserModel> userModels { get; set; }

        public DbSet<ProductModel> productModels { get; set; }

        public DbSet<OrderModel> orderModels { get; set; }

        public DbSet<PayModel> payModels { get; set; }

        public DbSet<EmployeeAdminModel> adminModels { get; set; }



        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>().ToTable("UserModel");
            modelBuilder.Entity<ProductModel>().ToTable("ProductModel");
            modelBuilder.Entity<OrderModel>().ToTable("OrderModel");
            modelBuilder.Entity<PayModel>().ToTable("PayModel");
            modelBuilder.Entity<EmployeeAdminModel>().ToTable("EmployeeAdminModel");
        }

    }
}
