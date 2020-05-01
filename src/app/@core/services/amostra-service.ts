import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Amostra } from '../data/amostra';
import { MessageService } from '../message.service';


@Injectable({ providedIn: 'root' })
export class AmostrasService {

  private amostrasUrl = 'http://localhost:8000/amostra';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** GET amostra from the server */
    getAmostras(): Observable<Amostra[]> {
      // console.log("Tentando ler json");
      return this.http.get<Amostra[]>(this.amostrasUrl + '/ler')
        .pipe(
          tap(_ => this.log('fetched amostras')),
          catchError(this.handleError<Amostra[]>('getData', [])),
        );
    }

  /** GET amostra by id. Return `undefined` when id not found */
  getAmostraNo404<Data>(id: number): Observable<Amostra> {
    const url = `${this.amostrasUrl}/?id=${id}`;
    return this.http.get<Amostra[]>(url)
      .pipe(
        map(amostras => amostras[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} amostra id=${id}`);
        }),
        catchError(this.handleError<Amostra>(`getAmostra id=${id}`)),
      );
  }

  /** GET amostra by id. Will 404 if id not found */
  getAmostra(id: number): Observable<Amostra> {
    const url = `${this.amostrasUrl}/${id}`;
    return this.http.get<Amostra>(url).pipe(
      tap(_ => this.log(`fetched amostra id=${id}`)),
      catchError(this.handleError<Amostra>(`getAmostra id=${id}`)),
    );
  }

  /* GET amostras whose name contains search term */
  searchAmostras(term: string): Observable<Amostra[]> {
    if (!term.trim()) {
      // if not search term, return empty amostra array.
      return of([]);
    }
    return this.http.get<Amostra[]>(`${this.amostrasUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found amostras matching "${term}"`) :
         this.log(`no amostras matching "${term}"`)),
      catchError(this.handleError<Amostra[]>('searchAmostras', [])),
    );
  }

  //////// Save methods //////////

  /** POST: add a new amostra to the server */
  addAmostra(amostra: Amostra): Observable<Amostra> {
    return this.http.post<Amostra>(this.amostrasUrl + '/add', amostra, this.httpOptions).pipe(
      tap((newAmostra: Amostra) => this.log(`added amostra w/ id=${newAmostra.id}`)),
      catchError(this.handleError<Amostra>('addAmostra')),
    );
  }

  /** DELETE: delete the amostra from the server */
  deleteAmostra(amostra: Amostra | number): Observable<Amostra> {
    const id = typeof amostra === 'number' ? amostra : amostra.id;
    const url = `${this.amostrasUrl}/${id}`;

    return this.http.delete<Amostra>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted amostra id=${id}`)),
      catchError(this.handleError<Amostra>('deleteAmostra')),
    );
  }

  /** PUT: update the amostra on the server */
  updateAmostra(amostra: Amostra): Observable<any> {
    return this.http.put(this.amostrasUrl, amostra, this.httpOptions).pipe(
      tap(_ => this.log(`updated amostra id=${amostra.id}`)),
      catchError(this.handleError<any>('updateAmostra')),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AmostraService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AmostraService: ${message}`);
  }
}
