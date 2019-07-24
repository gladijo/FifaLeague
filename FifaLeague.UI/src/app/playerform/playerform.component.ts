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
  
  isEdit:Boolean;
  title:String;  
  form:FormGroup;

  firstName:FormControl = new FormControl('',Validators.required);
  lastName:FormControl = new FormControl('',Validators.required);

  errorMessage:String;

  @Output() saved = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<any>();

  constructor(private dialogRef: MatDialogRef<PlayerformComponent>, @Inject(MAT_DIALOG_DATA) public data: Player, private fb: FormBuilder, private fifaleagueService: FifaLeagueService) { 
    
  }

  ngOnInit(): void {
    this.isEdit = false;
    this.form = this.fb.group({
        firstName: this.firstName,
        lastName: this.lastName
    });
    if(this.data)
    {
        if(this.data.firstName) {this.form.patchValue({firstName: this.data.firstName});}
        if(this.data.lastName) {this.form.patchValue({lastName: this.data.lastName});}
        if(this.data.lastName || this.data.firstName) { this.isEdit = true; }
    }  
    this.form.valueChanges
    .subscribe( data => console.log(JSON.stringify(data)));
  }

  handleSuccess() { 
      this.dialogRef.close();
  }

  handleError(errorResponse) {
      var errorMessage = errorResponse.error;
      var stringified = (Object.keys(errorMessage).map((key, value) => { return key + ":" + value; })).join();   
      this.errorMessage = stringified; 
  }

  getPlayerObj() {
    let player:Player = { id:0, firstName: '', lastName: '', score:0 };  

    player.firstName = this.form.get('firstName').value;
    player.lastName = this.form.get('lastName').value;

    player.id = this.data ? this.data.id : null; 

    return player;
  }

  save() {

      let player = this.getPlayerObj();     

      if(!this.isEdit)
      {
          this.fifaleagueService.create(player).subscribe(data => {
            this.handleSuccess()
          }, error => {
            this.handleError(error)
          })
      }
      else 
      {
          this.fifaleagueService.update(player).subscribe(data => {
            this.handleSuccess()
          }, error => {
            this.handleError(error)
          })
      }

  }

  close() {
      this.dialogRef.close();
  }

}
