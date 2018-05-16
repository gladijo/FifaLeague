using Microsoft.EntityFrameworkCore;

namespace FifaLeague.API.Models
{
    public class FifaLeagueContext : DbContext 
    {
        public FifaLeagueContext(DbContextOptions<FifaLeagueContext> options): base(options) { }

        public DbSet<Player> Players { get;set; }

        public DbSet<Team> Teams { get;set; }

        public DbSet<Match> Matches {get;set;}
    }
}