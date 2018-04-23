import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() _addPlayerEvent:EventEmitter<any> = new EventEmitter<any>();

  _playerForm:FormGroup;

  constructor(private _dialogRef: MatDialogRef<PlayerformComponent>, private _fb: FormBuilder, private _fifaleagueService: FifaLeagueService) { }

  ngOnInit() {
    this._playerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
   });
  }

  save() {
      var player = new Player();
      player.firstName = this._playerForm.get('firstName').value;
      player.lastName = this._playerForm.get('lastName').value;

      this._fifaleagueService.addPlayer(player).subscribe(data => { console.log(data); this._addPlayerEvent.emit(player); });
  }

  close() {
      this._dialogRef.close();
  }

}
