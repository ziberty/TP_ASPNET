using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TodoApi.Models
{
    public class EntreeContext : DbContext
    {
        public EntreeContext(DbContextOptions<EntreeContext> options)
            : base(options)
        {
        }

        public DbSet<Entree> Entrees { get; set; } = null!;
    }
}