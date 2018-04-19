import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {}

  openDialog():void {
  //   let dialogRef = this.dialog.open(NewPlayerDialog, { 
  //     width: '250px',
  //     data : { }
  //   });

  //   dialogRef.afterClosed().subscribe(result => { 
  //     console.log('The dialog was closed');
  //   });
  }
}
