import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private uri: string = environment.api
  private key: string = environment.key
  // private url: string = this.uri + "/movie/popular?api_key=" + this.key + "&language=fr&page=2";
  private url: string = "http://localhost:8081/api/movie/popular";

  constructor(private http: HttpClient) {
  }
  getPopularMovie(): Observable<any> {
    return this.http.get<Movie>(this.url)
  }

  getImageFromApi(name: string) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
}