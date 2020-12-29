import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-moviecards',
  templateUrl: './moviecards.component.html',
  styleUrls: ['./moviecards.component.css']
})
export class MoviecardsComponent implements OnInit {

  public movies = [] as any
  public pathImage = "https://image.tmdb.org/t/p/w300";
  constructor(private _moviesService: MovieService) { 
 
  }
  
  ngOnInit(): void {
    this._moviesService.getPopularMovie().subscribe(data => {
      this.movies = data.results;
    });
  }
}

