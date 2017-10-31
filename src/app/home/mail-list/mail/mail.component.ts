import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailService} from '../../../mail.service';
import {Mail} from '../../../mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  private mail: Mail;
  private mailId: number;

  constructor(private route: ActivatedRoute, private _mailService: MailService) {
    this.route.params.subscribe(params => {
      this.mailId = params['id'];
      this.getMailsWithId(this.mailId);
    });
  }

  ngOnInit() {
  }

  public getMailsWithId(id: number) {
    this.mail = this._mailService.getMail(id);
  }
}
