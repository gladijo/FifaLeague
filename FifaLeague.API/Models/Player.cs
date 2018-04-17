using System;

namespace FifaLeague.API.Models {
    public class Player {
        public Guid Id { get; set; }
        public string FirstName {get; set; }
        public string LastName { get;set;}

        public string Name { get { return this.FirstName + " " +  this.LastName; } }
    }
}