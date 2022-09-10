import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.css']
})
export class SaveComponent implements OnInit {

  loggedInUser:any;
  @Input() savingAccount: any; 
  balance: number = 0.00;
  withdraw: boolean = true;
  depositS: boolean = true;


  constructor(private auth: AuthService, private acc: AccountService) { }

  ngOnInit(): void {
    this.auth.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.auth.getLoggedInUser();
  }

 async applyIntrest(){
    let pass = await this.acc.applyIntrest(this.savingAccount.id);
  if(pass){
    window.location.reload();
    return true;
  } else {
    alert("Action could not complete");
    return false;
  }
  }

  toggleDeposit(){
    this.depositS = !this.depositS;
  }

  async deposit(){
    let pass = await this.acc.depositSaving(this.savingAccount.id, this.balance);
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
    
    let pass = await this.acc.withdrawlSaving(this.savingAccount.id ,this.balance);
    if(pass){
      this.withdraw = !this.withdraw;
      window.location.reload();
    } else {
      alert("Transaction could not be made");
    }
  }

  async deleteSavingAccount(){
    let pass = await this.acc.deleteSavings(this.savingAccount.id);
    if(pass){
      window.location.reload();
    } else {
      alert("Could not delete");
    }
  }

}
