import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url = 'http://localhost:8000/api/login_check';

    constructor(private httpClient: HttpClient) { }
    getToken(username:string, password:string){

        const body = new HttpParams()
            .set(`_username`, username)
            .set(`_password`, password);

      return this.httpClient.post(this.url, body.toString(),{
          headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
      });
    }




}
