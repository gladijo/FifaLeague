import { Component, OnInit } from '@angular/core';
import { FifaLeagueService } from '../fifa-league.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerlistComponent implements OnInit {

  public _players;

  constructor(private _fifaleagueService: FifaLeagueService) { }

  ngOnInit() {    
    this.getPlayers();
  }

  getPlayers() {
    this._fifaleagueService.getPlayers().subscribe(data => this._players = data);    
  }

}
