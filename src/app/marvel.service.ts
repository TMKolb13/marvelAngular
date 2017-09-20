import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private baseUrl: string = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=34466e6832c4ee74ac789a6af7006abe&hash=e03db4abbc702c4934129ca769aa1791&limit=50";
  private searchUrl: string = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=34466e6832c4ee74ac789a6af7006abe&hash=e03db4abbc702c4934129ca769aa1791&nameStartsWith="

  constructor(private http: Http) { }

  getCharacters(): Observable<any> {

    return this.http.get(this.baseUrl)
      .map(result => {
        return result.json()
      })

  }

  getSearch(searchTerm): Observable<any> {
    
        return this.http.get(this.searchUrl+searchTerm)
          .map(result => {
            return result.json()
          })
    
      }
}