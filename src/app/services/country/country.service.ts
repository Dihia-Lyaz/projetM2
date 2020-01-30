import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CountryService {
    constructor(private $http: HttpClient) {

    }

    getData(): Observable<any> {
       
        return this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=80a11243224ae9cb33714f350f457155' );
    }
}
