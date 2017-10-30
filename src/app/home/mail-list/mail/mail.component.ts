import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailService} from '../../../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  private mail;
  private mailId;

  constructor(private route: ActivatedRoute, private _mailServive: MailService) {
    this.route.params.subscribe(params => this.mailId);
  }

  ngOnInit() {
    this.mail = this._mailServive.getMail(this.mailId);
  }
}
