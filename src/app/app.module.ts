import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavPanelComponent} from './home/nav-panel/nav-panel.component';
import {MailListComponent} from './home/mail-list/mail-list.component';
import {InboxComponent} from './home/mail-list/inbox/inbox.component';
import {SentComponent} from './home/mail-list/sent/sent.component';
import {DraftComponent} from './home/mail-list/draft/draft.component';
import {SpamComponent} from './home/mail-list/spam/spam.component';
import {MailService} from './mail.service';
import { MailComponent } from './home/mail-list/mail/mail.component';

const routes = [
  {path: '', component: LoginComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: '', component: InboxComponent},
      {path: 'inbox', component: InboxComponent},
      {path: 'sent', component: SentComponent},
      {path: 'draft', component: DraftComponent},
      {path: 'spam', component: SpamComponent},
      {path: 'mail/:id', component: MailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavPanelComponent,
    MailListComponent,
    InboxComponent,
    SentComponent,
    DraftComponent,
    SpamComponent,
    MailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
