import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';
import { FifaLeagueService } from '../fifa-league.service';
import { PlayerformComponent } from '../playerform/playerform.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerlistComponent implements OnInit {
  @Input() public _players:Player[];
  
  selectedPlayer:Player;

  constructor(private _dialog:MatDialog, private _fifaleagueService:FifaLeagueService) { }

  ngOnInit() {    
    this.getPlayers();
  }  

  getPlayers():void {
    this._fifaleagueService.getPlayers().subscribe(data => this._players = data);    
  }

  select(player: Player): void {
    this.selectedPlayer = player;
    console.log(this.selectedPlayer);
    this.openDialog();
  }

  openDialog():void {
    const dialogConfig = new MatDialogConfig();
      
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { };
  
    let dialogRef = this._dialog.open(PlayerformComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => { 
       console.log('The dialog was closed.');       
    });
  }
}
