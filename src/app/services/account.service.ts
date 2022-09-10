import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  Url: string = `${environment.baseUrl}`;

  constructor() { }

  async applyIntrest(id: number){
    let resp =  await fetch(this.Url+"/accounts/apply_intrest/"+id,{
      method: 'PUT',
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

  async depositSaving(id: number, balance: number){
    let info = {balance};
    let resp = await fetch(this.Url+"/accounts/deposit_savings/"+id,{
      method: 'PUT',
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

  async depositChecking(id: number, balance: number){
    let info = {balance};

    let resp = await fetch(this.Url+"/accounts/deposit_checkings/"+id,{
      method: 'PUT',
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

  async withdrawlChecking(id: number,balance: number){
    let newBalance = {id,balance};

    let resp = await fetch (this.Url+"/accounts/withdrawl_checkings/"+id,{
      method:'PUT',
      body:JSON.stringify(newBalance),
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

  async withdrawlSaving(id: number,balance: number){
    let newBalance = {id,balance};

    let resp = await fetch (this.Url+"/accounts/withdrawl_savings/"+id,{
      method:'PUT',
      body:JSON.stringify(newBalance),
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

  async deleteCheckings(id: number){
    
    let resp = await fetch(this.Url+"/accounts/remove_checkings/"+id,{
      method:'DELETE',
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

  async deleteSavings(id: number){
    
    let resp = await fetch(this.Url+"/accounts/remove_savings/"+id,{
      method:'DELETE',
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
