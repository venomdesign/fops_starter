import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { WalletComponent } from './wallet/wallet.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './login/password/password.component';


import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { CallbackComponent } from "./callback/callback.component";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'home', component: WalletComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'registration', component: LoginComponent }, 
    { path: 'password', component: PasswordComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
