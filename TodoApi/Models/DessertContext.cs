using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TodoApi.Models
{
    public class DessertContext : DbContext
    {
        public DessertContext(DbContextOptions<DessertContext> options)
            : base(options)
        {
        }

        public DbSet<Dessert> Desserts { get; set; } = null!;
    }
}