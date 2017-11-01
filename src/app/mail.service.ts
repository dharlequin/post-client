import {Injectable} from '@angular/core';
import {Mail} from './mail';
import {MAILS} from './mock-mails';
import {HttpClient} from '@angular/common/http';
import {Mailbox} from './mailbox';
import {Observable} from 'rxjs/Observable';

export const MAILBOXES = {
  mailboxes: [
    {title: 'inbox'}, {title: 'sent'}, {title: 'draft'}, {title: 'spam'}
  ]
};

@Injectable()
export class MailService {

  private LETTERS = {
    letters: [
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'spam',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'sent',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'spam',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'sent',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'inbox',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'sent',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'spam',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
      {
        mailbox: 'draft',
        subject: 'Check this out!!!',
        body: 'Hey man! You have to see this ASAP. https://somelink.com  /r/nBest Regards, /r/nJohn',
        to: 'me@mail.com'
      },
    ]
  };

  constructor(private _http: HttpClient) {
  }

  getIdByTitle(boxes: Mailbox[], title: string): string {
    for (const mailbox of boxes) {
      if (mailbox.title === title) {
        return mailbox._id;
      }
    }
    return null;
  }

  public getAllHttp() {
    return this._http.get<Mail[]>('http://test-api.javascript.ru/v1/tonyp/users');
  }
  public addMailBoxes() {
    return this._http.post('http://test-api.javascript.ru/v1/tonyp', MAILBOXES);
  }
  public getMailBoxes(): Observable<Mailbox[]> {
    return this._http.get<Mailbox[]>('http://test-api.javascript.ru/v1/tonyp/mailboxes');
  }
  public addLetters(letters) {
    return this._http.post('http://test-api.javascript.ru/v1/tonyp', letters);
  }
  public deleteMailboxes() {
    return this._http.delete('http://test-api.javascript.ru/v1/tonyp/mailboxes', {responseType: 'text'});
  }
  public deleteLetters() {
    return this._http.delete('http://test-api.javascript.ru/v1/tonyp/letters', {responseType: 'text'});
  }
  public getAll(): Mail[] {
    return MAILS;
  }

  public getMailByType(type: string): Mail[] {
    const mails: Mail[] = this.getAll();
    const filteredMails: Mail[] = [];
    for (const mail of mails) {
      if (mail.type === type) {
        filteredMails.push(mail);
      }
    }
    return filteredMails;
  }

  public getMail(id: number) {
    const mails: Mail[] = this.getAll();
    for (const mail of mails) {
      if (mail.id === id) {
        return mail;
      }
    }
  }

  getLetters() {
    return this.LETTERS;
  }
}
