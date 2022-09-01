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

  register(){
    this.router.navigate(['register']);  }

  getToken(username: string, password: string){
    this.authServ.login(username, password)?.subscribe(
      (response : any) => {
        this.token = response
      },
    )
  if (this.token == ''){
    alert("Wrong username or password, try again or register account");

  } else {
     this.show = true;
     sessionStorage.setItem('token', this.token);
     this.router.navigate(['home']);
    }
  }





}
