import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  Url: string = `${environment.baseUrl}`;

  constructor() { }

  async getCheckingTransaction(id:number){
    let resp = await fetch(this.Url+"/transactions/get_checkings/"+id,{
      method:'GET',
      headers:new Headers({
          'Content-Type':'application/json',
          'Authorization': sessionStorage.getItem('token')+''
      })
  });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }

  async getSavingTransaction(id:number){
    let resp = await fetch(this.Url+"/transactions/get_savings/"+id,{
      method:'GET',
      headers:new Headers({
          'Content-Type':'application/json',
          'Authorization': sessionStorage.getItem('token')+''
      })
  });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }



}
