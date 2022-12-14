import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bankuser } from '../models/bankuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUrl: string = `${environment.baseUrl}`;
  userUrl: string = `${environment.baseUrl}/user`;
  loggedInUser: any;

  public token: string = '';

  constructor(private http: HttpClient) { }

  async getLoggedInUser() {
    if (!this.loggedInUser) {
      await this.getUser();
    }
    return this.loggedInUser;
  }


  async login(username: string , password: string){
    let credentials = {username, password};

    let resp = await fetch(this.tokenUrl+"/login",{
      method:'POST',
      body:JSON.stringify(credentials),
      headers:new Headers({
          'Content-Type':'application/json'
      })
  });
      if(resp.status === 200){
        let loggedInUser = await resp.json();

        if(loggedInUser){
          sessionStorage.setItem('token', resp.headers.get('Auth')!);
          sessionStorage.setItem('userId', loggedInUser.id);
          return true;
        } 
        return false;
      } else {
        return false;
      }
    }

    logOut(){
      this.loggedInUser = null;
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('Auth');
    }

    async getUser(){
      let userId = sessionStorage.getItem('userId');
      if(userId){
        let resp = await fetch(this.userUrl+'/'+userId, {
          headers: new Headers({
            'Authorization': sessionStorage.getItem('token')!
          })
        });
  
        if (resp.ok) {
          this.loggedInUser = await resp.json();
        }
  
      }
    }

  register(name: string, username: string, password: string, email: string ): Observable<boolean>{
    const payload = {name, username, password, email};
    return this.http.post<boolean>(`${this.userUrl}/register`, payload).pipe(
      catchError((err) => {
        return throwError(() => new Error('Username taken'));
      })
    );
  }

}
