using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using FifaLeague.API.Models;

namespace FifaLeague.API.Controllers {
    
    [Route("api/[controller]")]
    public class PlayerController : Controller {

        [HttpGet]
        public IEnumerable<Player> Get() {
            return new List<Player> {
                new Player { FirstName = "John", LastName = "Doe" }
            };
        }
    }
}