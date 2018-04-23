import { Component, OnInit, Input } from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { PlayerformComponent } from '../playerform/playerform.component';

import { FifaLeagueService } from '../fifa-league.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-playerpage',
  templateUrl: './playerpage.component.html',
  styleUrls: ['./playerpage.component.css']
})
export class PlayerpageComponent implements OnInit {

  private _players:Player[];

  constructor(public dialog: MatDialog, private _fifaleagueService: FifaLeagueService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers():void {
    this._fifaleagueService.getPlayers().subscribe(data => this._players = data);    
  }

  openDialog():void {
    const dialogConfig = new MatDialogConfig();
      
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
  
    let dialogRef = this.dialog.open(PlayerformComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => { 
       console.log('The dialog was closed.');
       // refresh data if needed
       this.getPlayers();       
    });
  }

  updatePlayer(model:Player):void {
    this._fifaleagueService.updatePlayer(model).subscribe(data => { 

    });
  }

}
