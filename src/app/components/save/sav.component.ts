import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.css']
})
export class SaveComponent implements OnInit {

  loggedInUser:any;
  @Input() savingAccount: any; 

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.auth.getLoggedInUser();
  }


}
