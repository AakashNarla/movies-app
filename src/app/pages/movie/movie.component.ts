import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  movieSimiliar: Movie[] = [];
  imagesSizes = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimiliarMovie(id);
    });
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }

  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }
  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }

  getSimiliarMovie(id: string) {
    this.movieService.getMovieSimiliar(id).subscribe((movieSimData) => {
      this.movieSimiliar = movieSimData;
    });
  }
}
