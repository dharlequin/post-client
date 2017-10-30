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
  public getMail(id: number) {
   return (mails => mails.find(mail => mail.id === id));
  }

}
