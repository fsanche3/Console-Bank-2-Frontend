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

  @Output() loggedIn: EventEmitter<any> = new EventEmitter();

  username: string  ='';
  password: string  =''; 
  message: string = '';

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['register']);  }

  async login(){
    this.message = '';

    let success = await this.authServ.login(this.username, this.password);
    if (success) {
      // this will send the "loggedIn" event to the parent component
      // we could respond in the parent by setting up event binding
      // <app-login (loggedIn)="thingToHappen()"></app-login>
      this.loggedIn.emit();
      this.router.navigate(['home']);
    } else {
      this.message = 'Incorrect credentials. Please try again.';
    }
  }







}
