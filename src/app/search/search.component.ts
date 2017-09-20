import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm;
  @Output() searchParam= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  newSearch(){
    console.log(this.searchTerm)    
    this.searchParam.emit(this.searchTerm)
  }

}
