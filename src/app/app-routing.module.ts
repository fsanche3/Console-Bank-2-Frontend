import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckingsComponent } from './components/checkings/checkings.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SavingsComponent } from './components/savings/savings.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  {
    path:'', redirectTo: 'login', 
    pathMatch: 'full'
  },
  {path : 'home',  component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'checkings', component: CheckingsComponent, canActivate: [AuthGuard]},
  {path: 'savings', component: SavingsComponent, canActivate: [AuthGuard]},
  {path : 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path : 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
