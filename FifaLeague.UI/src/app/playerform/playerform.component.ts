import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatDialogRef } from "@angular/material";
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

  @Input() selectedPlayer:Player;

  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<any>();

  constructor(private _dialogRef: MatDialogRef<PlayerformComponent>, private _fb: FormBuilder, private _fifaleagueService: FifaLeagueService) { 
    this._editMode = false;
  }

  ngOnInit() {
    this._playerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
   });

   if(this.selectedPlayer !== undefined)
   {
      this._playerForm.setValue({firstName: this.selectedPlayer.firstName, lastName: this.selectedPlayer.lastName });
      this._editMode = true;
   }   
  }

  save() {

      let player = new Player();
      if(this._editMode && this.selectedPlayer !== undefined)
      {
          player = this.selectedPlayer;
      }    

      player.firstName = this._playerForm.get('firstName').value;
      player.lastName = this._playerForm.get('lastName').value;      

      if(!this._editMode)
      {
          this._fifaleagueService.addPlayer(player).subscribe(data => { console.log(data) });
      }
      else 
      {
          this._fifaleagueService.updatePlayer(player).subscribe(data => { console.log(data) });
      }

      this.saved.emit();
      this._dialogRef.close();
  }

  close() {
      this._dialogRef.close();
  }

}
