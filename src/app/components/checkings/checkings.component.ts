import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-checkings',
  templateUrl: './checkings.component.html',
  styleUrls: ['./checkings.component.css']
})
export class CheckingsComponent implements OnInit {

  message: string = "You don't have any savings accounts";
  accounts: any[]= [];
  searchText:string = '';

  constructor(private acc: AccountService) { }

  ngOnInit(): void {
    this.getCheckings();
  }

  async getCheckings(){
    let resp = await this.acc.getCheckingAccounts();
    console.log(resp);
    this.accounts = resp;

  }
}
