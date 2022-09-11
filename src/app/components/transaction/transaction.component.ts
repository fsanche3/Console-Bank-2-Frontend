import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  description: string = "";
  @Input() transaction: any; 


  constructor() { }

  ngOnInit(): void {
    this.setDescription();
  }

  setDescription(){
    if(this.transaction.signal === "+"){
      this.description = "Deposit";
    } else {
      this.description = "Withdrawl"
    }
  }

}
