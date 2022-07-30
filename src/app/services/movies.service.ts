import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '0ba433fcad9884f3878175ea24ab9a84';
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`);
  }
}
