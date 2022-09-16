import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import{MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SavingsComponent } from './components/savings/savings.component';
import { CheckingsComponent } from './components/checkings/checkings.component';
import { CheckComponent } from './components/check/check.component';
import { SaveComponent } from './components/save/save.component';
import { AccountService } from './services/account.service';
import {UserService} from './services/user.service';
import { NameSearchPipe } from './pipes/name-search.pipe';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TransactionsComponent,
    SavingsComponent,
    CheckingsComponent,
    CheckComponent,
    SaveComponent,
    NameSearchPipe,
    TransactionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    
  ],
  providers: [AuthService,AccountService, UserService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
