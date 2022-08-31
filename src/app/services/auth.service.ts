import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bankuser } from '../models/bankuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `${environment.baseUrl}`;

 public token: string = '';

  constructor(private http: HttpClient) { }

 /* public generateToken(request) {
    return this.httpClient.post<string>("http://localhost:9191/authenticate", request, {  responseType: 'text' as 'json' });
  }
  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:9191/", {headers, responseType: 'text' as 'json' });
  }
*/
  login(username: string, password: string) {
    const payload = {username:username, password:password};
    return this.http.post<string>(`${this.url}/login`, payload, {responseType: 'text' as 'json' });
  }


}
