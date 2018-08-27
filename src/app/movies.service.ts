import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class MoviesService {

  constructor(
    private http : HttpClient
  ) { }

  // * API Call page 1 * //
  getdata(){
    return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=batman&page=1")
    
  }
  // * API Call page 2 * //
movieData(){
  return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=batman&page=2")
}

  // searchData(search){
  //    return this.http.post("http://localhost:3001/v1/movie/movieDetails",search)
  // }
  
}
