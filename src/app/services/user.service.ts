import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = `${environment.baseUrl}/user`;

  constructor() { }

  async changeUsername(id: number, username: string){
    let info = {username};
    let resp = await fetch(this.userUrl+"/change_username/"+id,{
      method:'PUT',
      body:JSON.stringify(info),
      headers: new Headers({
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')!
      })
  });
  if(resp){
    return true;
  } else {
    return false;
  }
  }

  async changeEmail(id: number, email: string){
    let info = {email};
    let resp = await fetch(this.userUrl+"/change_email/"+id,{
      method:'PUT',
      body:JSON.stringify(info),
      headers: new Headers({
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')!
      })
  });
  if(resp){
    return true;
  } else {
    return false;
  }
  }
}
