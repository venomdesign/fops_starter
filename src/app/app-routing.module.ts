import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { CallbackComponent } from "./callback/callback.component";

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
	import { PasswordComponent } from './login/password/password.component';
import { HomeComponent } from "./home/home.component";

	import { InvoicesComponent } from "./invoices/invoices.component";
		import { ProfileComponent } from "./profile/profile.component";
		import { HistoryComponent } from "./history/history.component";
		import { WalletComponent } from './wallet/wallet.component';
        	import { AddAccountComponent } from './wallet/add-account/add-account.component';
        	import { SuccessComponent } from './wallet/success/success.component';
        	import { FailComponent } from './wallet/fail/fail.component';
	   	import { PaymentComponent } from './payment/payment.component';
        import { PaySuccessComponent } from './payment/pay-success/pay-success.component';
        import { PayFailComponent } from './payment/pay-fail/pay-fail.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },

    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent }, 
    	{ path: 'password', component: PasswordComponent },

    { path: 'home', component: HomeComponent },
    
    { path: 'invoices', component: InvoicesComponent },
    	{ path: 'profile', component: ProfileComponent },
    	{ path: 'history', component: HistoryComponent },
    	{ path: 'wallet', component: WalletComponent },
    		{ path: 'add-account', component: AddAccountComponent },
    		{ path: 'success', component: SuccessComponent },
    		{ path: 'fail', component: FailComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'pay-success', component: PaySuccessComponent },
    { path: 'pay-fail', component: PayFailComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
