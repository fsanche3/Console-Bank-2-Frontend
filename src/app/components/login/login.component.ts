import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bankuser } from 'src/app/models/bankuser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string  = 'google';
  password: string  ='google';
  response:any;

  constructor(private authServ: AuthService, private router: Router) {

   }

  ngOnInit(): void {
    this.getToken(this.username, this.password);
  }

  getToken(username: string, password: string){
    let resp=this.authServ.login(username, password);
resp.subscribe(data=> console.log(data));
  }





}
