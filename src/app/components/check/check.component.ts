import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  loggedInUser:any;
  total: number = 0;
  balance: number = 0;
  balance2: number = 0;
  @Input() checkingAccount: any; 
  withdraw: boolean = true;
  depositC: boolean = true;

  constructor(private auth: AuthService, private acc: AccountService, private router: Router, private transactionServ: TransactionService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.auth.getLoggedInUser();
  }

  toggleDeposit(){
    this.depositC = !this.depositC;
  }

  async deposit(){
  
  let pass = await this.acc.depositChecking(this.checkingAccount.id, this.balance2);

  if(pass){
    this.toggleDeposit();
    window.location.reload();
  } else {
    alert("Transaction could not be made");
  }

  }


  toggleWithdraw(){
    this.withdraw = !this.withdraw;
  }

  async withdrawl(){
    let pass = await this.acc.withdrawlChecking(this.checkingAccount.id ,this.balance);
    if(pass){
      this.withdraw = !this.withdraw;
      window.location.reload();
    } else {
      alert("Transaction could not be made");
    }
  }

  async deleteCheckingAccount(){
    let pass = await this.acc.deleteCheckings(this.checkingAccount.id);
    if(pass){
      window.location.reload();
    } else {
      alert("Could not delete");
    }
  }

  goToTransactions(){
    this.transactionServ.setCheckingId(this.checkingAccount.id);
    this.router.navigate(['transactions']);
  }
  

}
