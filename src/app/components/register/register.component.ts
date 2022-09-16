import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  username: string= '';
  password: string = '';
  email: string  = '';
  message: string = 'Username or email already in use';
  bool: boolean = false;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['home']);
  }
  
  register(name: string, username: string, password: string, email: string){
    this.authServ.register(name,username, password,email)?.subscribe(
      (response : boolean) => {
        this.bool = response;
      },
    )
    if(this.bool){
      this.home();
    } else {
      alert("Username or email already in use");
    }
    

  }

}
