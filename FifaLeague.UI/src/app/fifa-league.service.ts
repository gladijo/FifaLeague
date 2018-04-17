import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FifaLeagueService {

  private _serviceUrl = "http://localhost:5000/api/";
  constructor(private _http: HttpClient) { }

  getPlayers() {
    return this._http.get(this._serviceUrl + "Player");
  }

}
