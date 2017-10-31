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
  private mailId: number;

  constructor(private route: ActivatedRoute, private _mailService: MailService) {
    this.route.params.subscribe(params => {
      this.mailId = params['id'];
      this.mail = this.getMailsWithId(this.mailId);
      console.log(params);
    });
  }

  ngOnInit() {
  }

  public getMailsWithId(id: number) {
    this.mail = this._mailService.getMail(id);
  }
}
