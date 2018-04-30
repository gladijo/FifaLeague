import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Player} from './models/player';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription, ISubscription } from 'rxjs/Subscription';

@Injectable()
export class FifaLeagueService {

  public players: Observable<Player[]>;

  private baseUrl:String;  
  private _players: BehaviorSubject<Player[]>;
  private dataStore: {
    players: Player[]
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:5000/api";
    this.dataStore = { players:[] };
    this._players = <BehaviorSubject<Player[]>>new BehaviorSubject([]);
    this.players = this._players.asObservable();
  }

  loadAll() {
    this.http.get<Player[]>(`${this.baseUrl}/Player`)
    .subscribe(data => {
      this.dataStore.players = data;
      this._players.next(Object.assign({}, this.dataStore).players);
    }, error => console.log('Could not load players.'));
  }

  load(id: number | string) {
    this.http.get<Player>(`${this.baseUrl}/Player/${id}`).subscribe(data => {
      let notFound = true;
      this.dataStore.players.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.players[index] = data;
          notFound = false;
        }
      });
      if (notFound) {
        this.dataStore.players.push(data);
      }
      this._players.next(Object.assign({}, this.dataStore).players);
    }, error => console.log('Could not load player.'));
  }

  create(player: Player):Observable<Player> {
    let httpObservable = this.http.post<Player>(`${this.baseUrl}/Player`, JSON.stringify(player), this.httpOptions);        
    httpObservable.subscribe(data => {
        this.dataStore.players.push(data);
        this._players.next(Object.assign({}, this.dataStore).players);
      }, error => console.log('Could not create player.'));
    return httpObservable;
  }

  update(player: Player) {
    let httpObservable = this.http.put<Player>(`${this.baseUrl}/Player/${player.id}`, JSON.stringify(player), this.httpOptions);
        
    httpObservable.subscribe(data => {        
        this.dataStore.players.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.players[i] = data; }
        });
        this._players.next(Object.assign({}, this.dataStore).players);
      }, error => console.log('Could not update player.'));

    return httpObservable;
  }

  remove(playerId: number) {

    let httpObservable = this.http.delete(`${this.baseUrl}/Player/${playerId}`);
    httpObservable.subscribe(response => {
      this.dataStore.players.forEach((t, i) => {
        if (t.id === playerId) { this.dataStore.players.splice(i, 1); }
      });
      this._players.next(Object.assign({}, this.dataStore).players);
    }, error => console.log('Could not delete player.'));

    return httpObservable;
  }

}
