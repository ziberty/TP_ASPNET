using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TodoApi.Models
{
    public class PlatContext : DbContext
    {
        public PlatContext(DbContextOptions<PlatContext> options)
            : base(options)
        {
        }

        public DbSet<Plat> Plats { get; set; } = null!;
    }
}