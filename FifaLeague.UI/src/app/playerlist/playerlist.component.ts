import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerlistComponent implements OnInit {
  @Input() public Players:Player[];
  
  constructor() { }

  ngOnInit() {    
    
  }  
}
