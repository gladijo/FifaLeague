import { Component, OnInit, Input } from '@angular/core';
import { FifaLeagueService } from '../fifa-league.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerlistComponent implements OnInit {
  @Input() _players:Player[];
  
  constructor(private _fifaleagueService: FifaLeagueService) { }

  ngOnInit() {    
    this.getPlayers();
  }

  getPlayers() {
    this._fifaleagueService.getPlayers().subscribe(data => this._players = data);    
  }

}
