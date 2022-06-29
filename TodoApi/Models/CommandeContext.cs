using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TodoApi.Models
{
    public class CommandeContext : DbContext
    {
        public CommandeContext(DbContextOptions<CommandeContext> options)
            : base(options)
        {
        }

        public DbSet<Commande> Commandes { get; set; } = null!;
    }
}