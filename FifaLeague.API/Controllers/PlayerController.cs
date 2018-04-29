using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FifaLeague.API.Models;
using System.Net;
using System.Net.Http;
using System.Web;
using Microsoft.EntityFrameworkCore;

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
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Player> Get() {
            return _context.Players.ToList();
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody] Player player) {

            if(ModelState.IsValid)
            {
                var addedPlayer = _context.Players.Add(player);
                _context.SaveChanges();      

                return new HttpResponseMessage(HttpStatusCode.OK);  ;
            }
            else
            {
                return CreateInvalidModelMessage();
            }
                  
        }

        [HttpPut("{id}", Name = "Update")]
        public IActionResult Put(int id,[FromBody] Player player)
        {
            if(ModelState.IsValid)
            {   
                var objectToSave = _context.Players.Find(id);
                objectToSave.FirstName = player.FirstName;
                objectToSave.LastName = player.LastName;
              
                _context.Entry(objectToSave).State = EntityState.Modified;
                _context.SaveChanges();  

                // return saved Object
                return Ok(objectToSave);
            }
            else
            {                
                return NoContent();
            }
        }

        private HttpResponseMessage CreateInvalidModelMessage() {            
            var values = ModelState.Values.ToString();
            return new HttpResponseMessage(HttpStatusCode.BadRequest) {
                Content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(values), System.Text.Encoding.UTF8, "application/json"),
                ReasonPhrase = "Invalid Modelstate"
            };
        }
    }
}