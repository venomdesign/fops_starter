import { Http, HttpModule, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ChartsModule } from 'ng2-charts';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';
import { ScopeGuardService } from './services/scope-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent,
        HistoryComponent,
        CallbackComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SlimLoadingBarModule.forRoot(),
        ToastModule.forRoot(),
        [
            ChartsModule
        ]
    ],
    providers: [
        AuthService,
        AuthGuardService,
        GlobalService,
        ScopeGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
