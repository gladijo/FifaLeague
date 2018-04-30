using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FifaLeague.API.Models;
using System.Net;
using System.Net.Http;
using System.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;

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
                _context.Players.Add(new Player { FirstName = "John", LastName="Memory", Score=1});
                _context.Players.Add(new Player { FirstName = "Malcolm", LastName="Ransome", Score=2});
                _context.Players.Add(new Player { FirstName ="Laurene", LastName="Cano", Score=3});
                _context.Players.Add(new Player { FirstName ="Melynda", LastName="Almazan", Score=4});
                _context.Players.Add(new Player { FirstName ="Zella", LastName="Milliken", Score=5});
                _context.Players.Add(new Player { FirstName ="Luella", LastName="Gilmer", Score=6});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Player> Get() {
            return _context.Players.ToList();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Player player) {

            if(ModelState.IsValid)
            {
                var addCallback = _context.Players.Add(player);
                _context.SaveChanges();      

                return Ok(addCallback.Entity);
            }
            else
            {
                return BadRequest(ModelState);
            }
                  
        }

        [HttpPut("{id}", Name = "Update")]
        public IActionResult Put(int id,[FromBody] Player player)
        {
            if(ModelState.IsValid)
            {   
                var playerEntity = _context.Players.Find(id);
                playerEntity.FirstName = player.FirstName;
                playerEntity.LastName = player.LastName;
              
                _context.Entry(playerEntity).State = EntityState.Modified;
                _context.SaveChanges();  

                // return saved Object
                return Ok(playerEntity);
            }
            else
            {                
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}", Name ="Delete")]
        public IActionResult Delete(int id)
        {
            var playerEntity = _context.Players.Find(id);
            if(playerEntity != null)
            {
                _context.Players.Remove(playerEntity);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}