import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Player} from './models/player';

@Injectable()
export class FifaLeagueService {

  private _serviceUrl = "http://localhost:5000/api/";
  constructor(private _http: HttpClient) { }

  getPlayers() {
    return this._http.get(this._serviceUrl + "Player");
  }

  addPlayer(model:Player) {
    return this._http.post<Player>(this._serviceUrl + "Player", model);
  }

}
