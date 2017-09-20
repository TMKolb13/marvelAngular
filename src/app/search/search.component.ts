import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm;
  @Output() searchParam= new EventEmitter<string>();
  @Output() blankInput = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  newSearch(){
    if(!this.searchTerm){
      this.blankInput.emit()
    }else{
      console.log(this.searchTerm)    
      this.searchParam.emit(this.searchTerm)
    }
  }

}
