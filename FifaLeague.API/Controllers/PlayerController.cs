using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System.Linq;
using FifaLeague.API.Models;

namespace FifaLeague.API.Controllers {
    
    [Route("api/[controller]")]
    public class PlayerController : Controller {

        private readonly FifaLeagueContext _context;

        public PlayerController(FifaLeagueContext context)
        {
            _context = context;

            if(_context.Players.Count() == 0)
            {
                _context.Players.Add(new Player { FirstName = "John", LastName= "Memory"});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Player> Get() {
            return _context.Players.ToList();
        }
    }
}