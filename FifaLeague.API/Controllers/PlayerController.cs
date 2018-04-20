using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FifaLeague.API.Models;
using System.Net;
using System.Net.Http;
using System.Web;

namespace FifaLeague.API.Controllers
{

    [Route("api/[controller]")]
    public class PlayerController : Controller {

        private readonly FifaLeagueContext _context;

        public PlayerController(FifaLeagueContext context)
        {
            _context = context;
            if(_context.Players.Count() == 0)
            {
                _context.Players.Add(new Player { FirstName = "John", LastName= "Memory"});
                _context.Players.Add(new Player { FirstName = "Malcolm", LastName=  "Ransome"});
                _context.Players.Add(new Player { FirstName ="Laurene", LastName=  "Cano"});
                _context.Players.Add(new Player { FirstName ="Melynda", LastName=  "Almazan"});
                _context.Players.Add(new Player { FirstName ="Zella", LastName=  "Milliken"});
                _context.Players.Add(new Player { FirstName ="Luella", LastName=  "Gilmer"});
                _context.Players.Add(new Player { FirstName ="Sandi", LastName=  "Manville"});
                _context.Players.Add(new Player { FirstName ="Tamara", LastName=  "Sheeran"});
                _context.Players.Add(new Player { FirstName ="Luana", LastName=  "Digiacomo"});
                _context.Players.Add(new Player { FirstName ="Karly", LastName=  "Odegaard"});
                _context.Players.Add(new Player { FirstName ="Cheryle", LastName= "Mccotter"});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Player> Get() {
            return _context.Players.ToList();
        }

        [HttpPost]
        public HttpResponseMessage Post(Player player) {

            if(ModelState.IsValid)
            {
                _context.Players.Add(player);
                _context.SaveChanges();      

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                var values = ModelState.Values.ToString();
                var exception = new HttpResponseMessage(HttpStatusCode.BadRequest) {                     
                    Content = new StringContent(string.Format("Player could not be saved", values)),
                    ReasonPhrase = "Player not saved"
                };                               
                return exception;
            }
                  
        }
    }
}