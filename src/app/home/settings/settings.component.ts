import {Component, OnInit} from '@angular/core';
import {MailService} from '../../mail.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _mailService: MailService) {
  }

  ngOnInit() {
  }

  public fillDataBase() {
    console.log('Adding mailboxes');
    this._mailService.addMailBoxes().subscribe(_ => {
      console.log('Adding letters');
      this._mailService.getMailBoxes().subscribe(boxes => {
        const letters = this._mailService.getLetters();
            for (let i = 0; i < letters.letters.length; ++i) {
              letters.letters[i].mailbox = this._mailService.getIdByTitle(boxes, letters.letters[i].mailbox);
            }
            this._mailService.addLetters(letters).subscribe();
          }
        );
    });
  }

  public clearDataBase() {
    console.log('Clearing database');
    this._mailService.deleteMailboxes().subscribe(_ => this._mailService.deleteLetters().subscribe());
  }

}
