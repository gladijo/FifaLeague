using System;
using System.ComponentModel.DataAnnotations;

namespace FifaLeague.API.Models {
    public class Player {
        public int ID { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,40}$", 
         ErrorMessage = "Characters are not allowed.")]
        public string FirstName {get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,40}$", 
         ErrorMessage = "Characters are not allowed.")]
        public string LastName { get;set;}

        public string Name { get { return this.FirstName + " " +  this.LastName; } }
    }
}