import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FifaLeagueService } from '../fifa-league.service';

@Component({
  selector: 'app-playerform',
  templateUrl: './playerform.component.html',
  styleUrls: ['./playerform.component.css']
})
export class PlayerformComponent implements OnInit {

  _playerForm:FormGroup;

  constructor(private _dialogRef: MatDialogRef<PlayerformComponent>, @Inject(FormBuilder) _fb: FormBuilder, private _fifaleagueService: FifaLeagueService) { }

  ngOnInit() {
  }

  save() {
      this._dialogRef.close();
  }

  close() {
      this._dialogRef.close();
  }

}
