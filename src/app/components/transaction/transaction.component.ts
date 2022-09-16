import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  description: string = "";
  history: string = "";
  @Input() transaction: any; 


  constructor() { }

  ngOnInit(): void {
    this.setDescription();
  }

  setDescription(){
    if(this.transaction.signal === "+"){
      this.description = "Deposit";
      this.history = "Deposited";
    } else if (this.transaction.signal === "-"){
      this.description = "Withdrawl"
      this.history = "Withdrew";
    } else {
      this.description = "Interest Applied";
      this.history = "Interest Amount Earned";
    }
  }

}
