import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailService} from '../../../../mail.service';
import {Letter} from '../../../../letter';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  private letter: Letter;
  private box: string;

  constructor(private route: ActivatedRoute, private _mailService: MailService) {
    this.route.params.subscribe(params => {
      this.getMailsWithId(params['id']);
    });
  }

  ngOnInit() {
  }

  public getMailsWithId(id: string) {
    this._mailService.getLetterById(id).subscribe(letter => {
      this.letter = letter;
      this._mailService.getMailBoxById(letter.mailbox).subscribe(mailbox => this.box = mailbox.title);
    });
  }
}
