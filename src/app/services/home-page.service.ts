import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private apiUrl = "https://api.raulthedeveloper.site/wp-json/wp/v2/personal_portfolio";
  constructor(private http:HttpClient) { }

  // getData(): Observable<any>{

  // }
}
