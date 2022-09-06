import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  @Input() loggedInUser: any;
  @Output() loggedOut: EventEmitter<any> = new EventEmitter();

  
  constructor(private router: Router, private authServ: AuthService) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['home']);
  }

  logout(){
    this.loggedInUser = null;
    this.authServ.logOut();
    this.loggedOut.emit();
    this.router.navigate(['login']);
  }

}
