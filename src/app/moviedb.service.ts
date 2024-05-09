// From PDF
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviedbService {
  baseURL: string = 'http://localhost:9002/api/';
  constructor(private http: HttpClient) {}
  getMovies(): Observable<any> {
    return this.http.get(this.baseURL + 'movies');
  }
  getMovie(movieID: number): Observable<any> {
    return this.http.get(this.baseURL + 'movie/' + movieID);
  }
}

// // From CoPilot
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root',
// })
// export class MoviedbService {
//   // so this the correct
//   baseURL: string = 'http://192.168.248.12/';

//   constructor(private http: HttpClient) {}

//   getMovies(): Observable<any> {
//     return this.http.get(this.baseURL + 'movies/all');
//   }

//   getMovie(movieID: number): Observable<any> {
//     return this.http.get(this.baseURL + 'movie/' + movieID);
//   }
// }
