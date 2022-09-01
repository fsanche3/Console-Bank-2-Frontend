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

  show : boolean = false;
  username: string  ='';
  password: string  =''; 
  token: string= '';

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getToken(username: string, password: string){
    this.authServ.login(username, password)?.subscribe(
      (response : any) => {
        this.token = response
      },
    )
  if (this.token == ''){
  console.log("wrong entry")
  } else {
  this.show = true;
  console.log(this.token)
  sessionStorage.setItem('token', this.token);
  this.router.navigate(['home']);}
  }





}
