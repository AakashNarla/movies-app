import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http : HttpClient) {}

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0ba433fcad9884f3878175ea24ab9a84')
  }
}
