using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using FifaLeague.API.Models;
using FifaLeague.API.Repositories;
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

        private IRepository<Player> _repository;
        public PlayerController(FifaLeagueContext context)
        {
            _repository = new FifaLeagueRepository(context);
            if(_repository.GetList().Count() == 0)
            {
                _repository.Add(new Player { FirstName = "John", LastName="Memory"});
                _repository.Add(new Player { FirstName = "Malcolm", LastName="Ransome"});
                _repository.Add(new Player { FirstName ="Laurene", LastName="Cano"});
            }
        }

        [HttpGet]
        public IEnumerable<Player> Get() {
            return _repository.GetList();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Player player) {

            if(ModelState.IsValid)
            {
                _repository.Add(player);     
                // repository callback
                return Ok();
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
                var playerEntity = _repository.GetList().Where(x => x.ID == id).First();
                playerEntity.FirstName = player.FirstName;
                playerEntity.LastName = player.LastName;
              
                _repository.Update(playerEntity);

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
            var playerEntity = _repository.GetList().Where(x => x.ID == id).First();
            if(playerEntity != null)
            {
                _repository.Delete(playerEntity);
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}