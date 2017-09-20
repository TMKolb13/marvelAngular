import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  characterData;
  searchTerm;
  
    constructor(private marvelService: MarvelService){}
  
    //method called getDataFromService and inside it we call the getQuestionInfo method on the service itself in jeopardy.service.ts
    getDataFromService(){
      this.marvelService.getCharacters()
        .subscribe(
          characterData => {
            this.characterData = characterData.data.results
            console.log(this.characterData)
          }
        )
    }
  
    ngOnInit(){
      this.getDataFromService()
    }

    searchAPI(thing: string){
      console.log("searchAPI method was called")
      this.searchTerm = thing
      this.marvelService.getSearch(this.searchTerm)
      .subscribe(
        characterData => {
          this.characterData = characterData.data.results
          console.log(this.characterData)
        }
      )
    }
}
