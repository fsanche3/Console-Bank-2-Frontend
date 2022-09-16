import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  Url: string = `${environment.baseUrl}`;
  checkingId: number = 0;
  savingId: number  = 0;
  //True is saving false is checking
  accountType: boolean= false;

  constructor() { }

  setAccountType(type:boolean){
    this.accountType = type;
  }

  getAccountType(){
    return this.accountType;
  }
  setSavingId(id: number){
    this.savingId = id;
    this.setAccountType(true);
  }

  getSavingId(){
    return this.savingId;
  }

  setCheckingId(id: number){
    this.checkingId = id;
    this.setAccountType(false);
  }

  getCheckingId(){
    return this.checkingId;
  }

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
