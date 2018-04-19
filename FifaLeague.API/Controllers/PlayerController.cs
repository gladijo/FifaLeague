using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FifaLeague.API.Models;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
                  
        }
    }
}