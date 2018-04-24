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

  constructor(public _dialog: MatDialog) {}

  ngOnInit() {
    
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
