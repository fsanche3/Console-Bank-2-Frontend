import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  Url: string = `${environment.baseUrl}`;

  constructor() { }
/*
  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:9191/", {headers, responseType: 'text' as 'json' });
  }
*/

async getSavingAccounts(){
  let resp = await fetch(this.Url+"/accounts/get_savings",{
    method:'GET',
    headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')+''
    })
});
if(resp.status === 200){
    return resp.json();
}
}

async getCheckingAccounts(){
  let resp = await fetch(this.Url+"/accounts/get_checkings",{
    method:'GET',
    headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')+''
    })
});
if(resp.status === 200){
    return resp.json();
}
}

}
