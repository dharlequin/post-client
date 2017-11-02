import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mailbox} from './mailbox';
import {Observable} from 'rxjs/Observable';
import {Letter} from './letter';

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

  public getAllLetters(): Observable<Letter[]> {
    return this._http.get<Letter[]>('http://test-api.javascript.ru/v1/tonyp/letters');
  }
  public getLetterById(id: string): Observable<Letter> {
    return this._http.get<Letter>('http://test-api.javascript.ru/v1/tonyp/letters/' + id);
  }
  public addMailBoxes(): Observable<any> {
    return this._http.post<any>('http://test-api.javascript.ru/v1/tonyp', MAILBOXES);
  }
  public getMailBoxes(): Observable<Mailbox[]> {
    return this._http.get<Mailbox[]>('http://test-api.javascript.ru/v1/tonyp/mailboxes');
  }
  public getMailBoxById(id: string): Observable<Mailbox> {
    return this._http.get<Mailbox>('http://test-api.javascript.ru/v1/tonyp/mailboxes/' + id);
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

  getLetters() {
    return this.LETTERS;
  }
}
