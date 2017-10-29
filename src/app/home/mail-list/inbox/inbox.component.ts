import {Component, OnInit} from '@angular/core';
import {MailService} from '../../../mail.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public mails;
  public mail;

  constructor(private _mailService: MailService) {
  }

  ngOnInit() {
    this.mails = this._mailService.getAll();
  }

}
