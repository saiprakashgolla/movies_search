import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import{ FilterPipe} from './app.filter';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
