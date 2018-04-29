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

@Injectable()
export class FifaLeagueService {

  players: Observable<Player[]>;

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

  create(player: Player) {
    this.http.post<Player>(`${this.baseUrl}/Player`, JSON.stringify(player), this.httpOptions)
    .pipe(
      catchError(this.handleError('createPlayer', player))
    )
    .subscribe(data => {
        this.dataStore.players.push(data);
        this._players.next(Object.assign({}, this.dataStore).players);
      }, error => console.log('Could not create player.'));
  }

  update(player: Player) {
    this.http.put<Player>(`${this.baseUrl}/Player/${player.id}`, JSON.stringify(player),this.httpOptions)
      .pipe(
        catchError(this.handleError('updatePlayer', player))
      )
      .subscribe(data => {
        debugger;
        this.dataStore.players.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.players[i] = data; }
        });

        this._players.next(Object.assign({}, this.dataStore).players);
      }, error => console.log('Could not update player.'));
  }

  remove(playerId: number) {
    this.http.delete(`${this.baseUrl}/Player/${playerId}`).subscribe(response => {
      this.dataStore.players.forEach((t, i) => {
        if (t.id === playerId) { this.dataStore.players.splice(i, 1); }
      });

      this._players.next(Object.assign({}, this.dataStore).players);
    }, error => console.log('Could not delete player.'));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
