import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Player} from './models/player';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class FifaLeagueService {

  private _serviceUrl = "http://localhost:5000/api/";
  constructor(private _http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this._http.get<Player[]>(this._serviceUrl + "Player");
  }

  /** POST: add a new player to the database */
  addPlayer (model: Player): Observable<Player> {
    return this._http.post<Player>(this._serviceUrl + "Player", model, httpOptions)
      .pipe(
        catchError(this.handleError('addPlayer', model))
      );
  }

  /** POST: updating existing player to the database */
  updatePlayer( model:Player): Observable<Player> {
    return this._http.put<Player>(this._serviceUrl + "Player", model, httpOptions)
      .pipe(
        catchError(this.handleError('updatePlayer', model))
      );
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
