import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser:any;
  username: string = "";
  name: string ="";
  email: string = "";
  usernameChange: boolean = true;
  emailChange: boolean = true;

  constructor(private auth: AuthService, private userServ: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  toggleUsernameChange(){
    this.usernameChange = !this.usernameChange;
  }

  toggleEmailChange(){
    this.emailChange = !this.emailChange;
  }

  async changeUsername(){
    let pass = await this.userServ.changeUsername(this.loggedInUser.id, this.username);
    if(pass){
      window.location.reload();
    } else {
      alert("Username could not be changed");
    }
  }

  async changeEmail(){
    let pass = await this.userServ.changeEmail(this.loggedInUser.id, this.email);
    if(pass){
      window.location.reload();
    } else {
      alert("Email could not be changed");
    }
    
  }

  async getLoggedInUser(){
    this.loggedInUser = await this.auth.getLoggedInUser();
    this.username = this.loggedInUser.username;
    this.name = this.loggedInUser.name;
    this.email = this.loggedInUser.email;
  }


}
