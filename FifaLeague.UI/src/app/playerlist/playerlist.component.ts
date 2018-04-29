import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';
import { FifaLeagueService } from '../fifa-league.service';
import { PlayerformComponent } from '../playerform/playerform.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerlistComponent implements OnInit {
    
  Players:Observable<Player[]>;

  constructor(private _dialog:MatDialog, private _fifaleagueService:FifaLeagueService) { }

  ngOnInit() {    
      this.Players = this._fifaleagueService.players;
      this._fifaleagueService.loadAll();
  }  

  selectPlayer(model:Player):void {
    // navigate to player form
    this.openDialog(model);
  }

  openDialog(model:Player):void {
    const dialogConfig = new MatDialogConfig();
      
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = model;
  
    let dialogRef = this._dialog.open(PlayerformComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => { 
       console.log('The dialog was closed.');       
    });
  }
}
