import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavPanelComponent} from './home/mailbox/nav-panel/nav-panel.component';
import {MailListComponent} from './home/mailbox/mail-list/mail-list.component';
import {MailService} from './mail.service';
import {MailComponent} from './home/mailbox/mail-list/mail/mail.component';
import {HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './home/settings/settings.component';
import {UserCardListComponent } from './home/user-card-list/user-card-list.component';
import {UserCardComponent} from './home/user-card-list/user-card/user-card.component';
import { MailboxComponent } from './home/mailbox/mailbox.component';
import {UserService} from './user.service';

const routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', redirectTo: 'home/mailbox/inbox', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'mailbox', redirectTo: 'mailbox/inbox', pathMatch: 'full'},
      {path: 'mailbox', component: MailboxComponent,
        children: [
          {path: ':box', component: MailListComponent},
          {path: ':box/mail/:id', redirectTo: 'mail/:id', pathMatch: 'full'},
          {path: 'mail/:id', component: MailComponent}
      ]},
      {path: 'contacts', component: UserCardListComponent},
      {path: 'settings', component: SettingsComponent},
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
    UserCardListComponent,
    UserCardComponent,
    MailboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
