import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
// import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies:any;
  public moviename:any;
  public movieposter:any;
  public moviePoster:any;
  public movieTitle:any;
  public data:any;
  public new:any;
  public new2:any;
  public title:any;
  public moviedata:any;
  public totalmovies:any = [];
  public textInput:any;
  constructor(
    private moviesService:MoviesService
  ) { }

   movie = {
     find:''
   }

  ngOnInit() {
    
    // this.search()
    this.new2=''
    this.moviesService.getdata()
    .subscribe(
      (response) => {
        // console.log(response)
        this.movies = response;
        // console.log(this.movies)
        
        this.movieposter = this.movies.Search;
        // this.totalmovies.push(this.movieposter);

        console.log('4444444444444444',this.movieposter)
        // this.movieSearch()
        // this.moviename = this.movies.Title;
   
        //  console.log(this.moviename)
        }
      )
      this.moviesService.movieData()
      .subscribe(
        (responce) => {
          this.moviedata = responce;
          this.moviename = this.moviedata.Search;
          // this.movieposter.push(this.moviename);.
          console.log('uuuuuuuuuu',this.moviename)

          this.totalmovies = this.movieposter.concat(this.moviename);
      console.log('kkkkkkkkkkkkkkk', this.totalmovies)
        }
      )
      

     /*  var finlTotalmovies = [];
      console.log('11111111',typeof this.totalmovies,this.totalmovies)
      for(var i=0; i<this.totalmovies.length; i++){
        console.log('-----------------------',this.totalmovies.length)
        finlTotalmovies.push(this.totalmovies[i])
      }
      console.log('ppppppppppppp',finlTotalmovies) */
      // this.new = this.movie;
      // this.new2 = this.new.find;
      // this.textInput = this.new2;
     


      // var timeout = null;
      
      // this.textInput.onkeyup = function (e) {
      
         
      //     clearTimeout(timeout);
      
      //     timeout = setTimeout(function () {
      //         console.log('Input Value:', this.textInput.value);
      //     }, 300);
      // };
  }

  // search(){
  //   this.new = this.movie;
  //   this.new2 = this.new.find;
  //   console.log(this.new2)
  //   this.moviesService.searchData(this.new)
    
  //     .subscribe(
  //       (response) => {

  //         // console.log(response)
  //         this.data = response;
  //         this.title = this.data.addDetails;
  //         console.log(this.title);
          
  //       }
        
  //     )
      
  // }

  
 
  // movieSearch(){
  //   for(var i=0; i<this.movieposter.length; i++){
  //     console.log(this.movieposter.length)
  //     // this.moviesData.Title = this.movieposter[i].Poster;
  //     // this.moviesData.Poster = this.movieposter[i].Title;
  //   }
  // }

}
