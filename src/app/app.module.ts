import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavPanelComponent} from './home/nav-panel/nav-panel.component';
import {MailListComponent} from './home/mail-list/mail-list.component';
import {MailService} from './mail.service';
import {MailComponent} from './home/mail-list/mail/mail.component';
import {HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './home/settings/settings.component';

const routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', redirectTo: 'home/box/inbox', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'box/:box', component: MailListComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'box/:box/mail/:id', redirectTo: 'mail/:id', pathMatch: 'full'},
      {path: 'mail/:id', component: MailComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavPanelComponent,
    MailListComponent,
    MailComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
