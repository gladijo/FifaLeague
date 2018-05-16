using System;
using System.Collections;
using System.Collections.Generic;

namespace FifaLeague.API.Models {
public class Team {
    private IEnumerable<Player> _players; 
    public IEnumerable<Player> Players { get { return _players; } }

    public string SoccerTeam {get;set;}

    public Team() {
        this._players = new List<Player>();
    }
}

}