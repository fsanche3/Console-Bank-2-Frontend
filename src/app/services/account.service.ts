import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  Url: string = `${environment.baseUrl}`;

  constructor() { }

  async deleteCheckings(){
    
  }

  async createCheckings(balance: number, name: string){
    let info = {balance, name};
      let resp = await fetch(this.Url+"/accounts/create_checkings",{
        method:'POST',
        body:JSON.stringify(info),
        headers:new Headers({
            'Content-Type':'application/json',
            'Authorization': sessionStorage.getItem('token')+''
        })
    });

      if(resp.status === 200){
        return true;
      } else {
        return false;
      }

  }

  async createSavings(balance: number, intrestrate: number, name: string){
    let info = {balance,intrestrate,name};
      let resp = await fetch(this.Url+"/accounts/create_savings",{
        method:'POST',
        body:JSON.stringify(info),
        headers:new Headers({
            'Content-Type':'application/json',
            'Authorization': sessionStorage.getItem('token')+''
        })
    });

      if(resp.status === 200){
        return true;
      } else {
        return false;
      }

  }


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
