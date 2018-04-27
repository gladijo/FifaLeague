import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FifaLeagueService } from '../fifa-league.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-playerform',
  templateUrl: './playerform.component.html',
  styleUrls: ['./playerform.component.css']
})
export class PlayerformComponent implements OnInit {

  _editMode:Boolean;
  _title:String;  
  _playerForm:FormGroup;

  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<any>();

  constructor(private _dialogRef: MatDialogRef<PlayerformComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _fifaleagueService: FifaLeagueService) { 
    this._editMode = false;
  }

  ngOnInit() {

    this._playerForm = this._fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ]
   });

   if(this.data !== undefined)
   {
      this._playerForm.setValue({firstName: this.data.firstName, lastName: this.data.lastName });
      this._editMode = true;
   }   
  }

  save() {

      let player = new Player();
      if(this._editMode && this.data !== undefined)
      {
          player = this.data;
      }    

      player.firstName = this._playerForm.get('firstName').value;
      player.lastName = this._playerForm.get('lastName').value;      

      if(!this._editMode)
      {
          this._fifaleagueService.addPlayer(player).subscribe(data => { 
                
            }, error => { 

            }, () => {
                this.saved.emit();
                this._dialogRef.close();
            });
      }
      else 
      {
          this._fifaleagueService.updatePlayer(player).subscribe(data => { console.log(data) });
      }

  }

  close() {
      this._dialogRef.close();
  }

}
