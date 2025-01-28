using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Cookie> Cookies { get; set; }
        public DbSet<Politic> Politics { get; set; }
    }
}
