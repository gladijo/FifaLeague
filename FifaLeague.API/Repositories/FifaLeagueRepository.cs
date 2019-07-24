using System;
using System.Collections.Generic;
using System.Linq;
using FifaLeague.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FifaLeague.API.Repositories {
    public class FifaLeagueRepository : IRepository<Player>
    {
        private FifaLeagueContext _context;

        public FifaLeagueRepository(FifaLeagueContext context)
        {
            this._context = context;
        }

        public void Add(Player entity)
        {
            _context.Entry(entity).State = EntityState.Added; 
            _context.SaveChanges(); 
        }

        public void Delete(Player entity)
        {
            _context.Remove(entity); 
            _context.SaveChanges(); 
        }

        public IEnumerable<Player> GetList()
        {
            return _context.Players.AsEnumerable();
        }

        public void Update(Player entity)
        {
            _context.Entry(entity).State = EntityState.Modified; 
            _context.SaveChanges(); 
        }
    }
}