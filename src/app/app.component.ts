import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'console-bank-2';
  loggedInUser: any;

constructor(private authServ: AuthService) { }

async updateLogin() {
  this.loggedInUser = await this.authServ.getLoggedInUser();
}

}
