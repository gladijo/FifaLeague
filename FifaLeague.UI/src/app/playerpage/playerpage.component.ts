import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { PlayerformComponent } from '../playerform/playerform.component';

@Component({
  selector: 'app-playerpage',
  templateUrl: './playerpage.component.html',
  styleUrls: ['./playerpage.component.css']
})
export class PlayerpageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
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

  //   dialogRef.afterClosed().subscribe(result => { 
  //     console.log('The dialog was closed');
  //   });
  }

}
