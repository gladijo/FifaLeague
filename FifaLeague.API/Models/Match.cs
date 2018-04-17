using System;

namespace FifaLeague.API.Models {
    public class Match {

        public Guid Id { get; set; }

        public Team One { get; set; }

        public Team Two { get; set; }
    }
}