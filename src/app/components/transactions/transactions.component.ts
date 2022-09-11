import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  message: string = "You don't have any transactions for this account";
  transactions: any[]= [];
  searchText:string = '';
  loggedInUser: any;
  
  

  constructor(private auth: AuthService,private transac: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  async getTransactions(){
    let resp = await this.transac.getCheckingTransaction(this.transac.getCheckingId());
    this.transactions = resp;
  }

  async getUser(){
    this.loggedInUser = await this.auth.getLoggedInUser();
  }

}
