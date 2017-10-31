import {Injectable} from '@angular/core';
import {Mail} from './mail';
import {MAILS} from './mock-mails';


@Injectable()
export class MailService {

  constructor() {
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
    console.log('Getting mail with id ' + id);
    const mails: Mail[] = this.getAll();
    console.log('Retrieved mails ' + mails);
    for (const mail of mails) {
      console.log('Mail with id ' + mail.id);
      console.log(mail.id + ' === ' + id + ' = ' + (mail.id === id));
      if (mail.id === +id) {
        console.log('Found mail with id ' + id);
        return mail;
      }
    }
  }

}
