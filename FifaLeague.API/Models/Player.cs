using System;
using System.ComponentModel.DataAnnotations;

namespace FifaLeague.API.Models {
    public class Player {
        public int ID { get; set; }
        [Required]
        public string FirstName {get; set; }
        [Required]
        public string LastName { get;set;}

        public int Score {get;set; }

        public string Name { get { return this.FirstName + " " +  this.LastName; } }
    }
}