import { Component } from '@angular/core';
import { MoviedbService } from './moviedb.service';
import { MovieSummary } from './Models/MovieSummary';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moviedb';
  loading: boolean = false;
  errorMessage: string = '';
  selectedMovieID: number = 0;
  response: any;
  showMovieList: Boolean = false;
  movieSummary: MovieSummary = {
    mov_id: 0,
    mov_title: '',
    mov_year: 0,
    mov_time: 0,
    mov_lang: '',
    mov_dt_rel: '',
    mov_rel_country: '',
  };
  movieCollection: Array<MovieSummary> = [];
  constructor(private movieDB: MoviedbService) {}
  public getMovies() {
    this.loading = true;
    this.movieDB.getMovies().subscribe({
      next: (response) => {
        console.log('Response Received');
        console.log(response);
        this.response = response.data;
      },
      error: (error) => {
        console.log('Response has Failed.');
        this.errorMessage = error;
        console.log(error);
      },
      complete: () => {
        console.log('Response has Completed');
        this.showMovieList = true;

        this.loading = false;
        this.getDataObjects(this.response);
      },
    });
  }
  private getDataObjects(dataSet: any): void {
    for (let index in dataSet) {
      console.log('Movie Data: ', dataSet[index]);
      this.movieCollection.push(dataSet[index]);
    }
    console.log('Dataset: ', this.movieCollection);
  }
}
