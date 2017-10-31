import {Component, Input, OnInit} from '@angular/core';
import {MailService} from '../../mail.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Mail} from '../../mail';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  private box: string;
  private mails: Mail[];

  constructor(private route: ActivatedRoute, private _mailService: MailService) {
    this.route.params.subscribe(params => {
      this.box = params['box'];
      this.getMailsForSelectedBox(this.box);
    });
  }

  ngOnInit() {
  }
  public getMailsForSelectedBox(box: string) {
    this.mails = this._mailService.getMailByType(box);
  }

}
