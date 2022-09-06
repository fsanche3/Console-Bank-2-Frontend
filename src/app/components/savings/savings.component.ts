import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class  SavingsComponent implements OnInit {

  message: string = "You don't have any savings accounts";
  accounts: any[]= [];
  searchText:string = '';

  constructor(private accServ: AccountService) { }

  ngOnInit(): void {
    this.getSavings();
  }

 async getSavings(){
    let resp = await this.accServ.getSavingAccounts();
    console.log(resp);
    this.accounts = resp;

  }

}
