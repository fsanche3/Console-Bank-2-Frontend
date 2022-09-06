import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  loggedInUser:any;
  @Input() checkingAccount: any; 

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.auth.getLoggedInUser();
  }

}
