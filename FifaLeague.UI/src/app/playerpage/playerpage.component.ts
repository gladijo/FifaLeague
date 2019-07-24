import { Component } from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { PlayerformComponent } from '../playerform/playerform.component';

@Component({
  selector: 'app-playerpage',
  templateUrl: './playerpage.component.html',
  styleUrls: ['./playerpage.component.css']
})
export class PlayerpageComponent {

  constructor(public _dialog: MatDialog) {}

  openDialog():void {
    const dialogConfig = new MatDialogConfig();
      
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { };
  
    let dialogRef:MatDialogRef<PlayerformComponent,any> = this._dialog.open(PlayerformComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => { 
       console.log('The dialog was closed.');       
    });
  }

}
