import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { PlayerformComponent } from './playerform/playerform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FifaLeague';

  constructor(public dialog: MatDialog) {}

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
