import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Genre } from '../../models/movie';

@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genres: Genre[] = [];
  constructor(private  movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovieGenres().subscribe((genresData) => {
      this.genres = genresData;
    })
  }

}
