import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  private url = 'http://localhost:8000/api/adverts';

  constructor(private httpClient: HttpClient) { }

  getAdvert(){
   /* const headers = new Headers({
      'Authorization': 'Bearer '+token
    })*/
    return this.httpClient.get(this.url);
  }

}
