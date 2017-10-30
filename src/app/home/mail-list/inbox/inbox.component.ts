import {Component, OnInit} from '@angular/core';
import {MailService} from '../../../mail.service';
import {Mail} from '../../../mail';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public mails: Mail[];
  public mail: Mail;

  constructor(private _mailService: MailService) {
  }

  ngOnInit() {
    this.mails = this._mailService.getAll();
  }
}
