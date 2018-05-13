using System;

namespace FifaLeague.API.Models {
    public class Match {

        public Guid ID { get; set; }

        public Team One { get; set; }

        public Team Two { get; set; }

        public int ScoreTeamOne {get; set; }
        public int ScoreTeamTwo {get; set; }
    }
}