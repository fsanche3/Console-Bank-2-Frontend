import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  balance: number = 0;
  intrestrate: number = 0.00;
  name: string = "";
  message: string = "";
  checkCreate: boolean = true;
  saveCreate: boolean = true;


  constructor(private router: Router, private acc: AccountService) { }

  ngOnInit(): void {
  }


  toggleCheck(){
    this.checkCreate = !this.checkCreate;
  }

  toggleSave(){
    this.saveCreate = !this.saveCreate;
  }

async createSavings(){

  let success = await this.acc.createSavings(this.balance, this.intrestrate, this.name);

  if(success){
    this.saveCreate = !this.saveCreate;
  } else {
    alert("This account name is already being used please try another unique name");
  }

}

  async createCheckings(){

    let success = await this.acc.createCheckings(this.balance, this.name);
    if(success){
      this.message = "Your account has been created"
      this.checkCreate = !this.checkCreate;
    } else{
      alert("This account name is already being used please try another unique name");
    }
  }

  goToTransactions(){
    this.router.navigate(['transactions']);
  }

  goToSavings(){
    this.router.navigate(['savings']);
  }

  goToCheckings(){
    this.router.navigate(['checkings']);
  }



}
