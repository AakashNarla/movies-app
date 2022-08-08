import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  totalRecords: number = 10000;
  genreId: string | null = null;
  searchText: string | null = null;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      console.log(genreId);
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number, searchKeyword?: string) {
    this.moviesService.searchMovies(page, searchKeyword).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMovieByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages

    const pageNum = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNum);
    } else {
      if (this.searchText) {
        this.getPagedMovies(pageNum, this.searchText);
      } else {
        this.getPagedMovies(pageNum);
      }
    }
  }

  searchChanged(page: number = 1) {
    if (this.searchText) {
      this.getPagedMovies(1, this.searchText);
    }
  }
}
