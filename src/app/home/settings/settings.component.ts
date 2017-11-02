import {Component, OnInit} from '@angular/core';
import {MailService} from '../../mail.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _mailService: MailService, private _userService: UserService) {
  }

  ngOnInit() {
  }

  public fillMailboxDatabase() {
    console.log('Adding mailboxes');
    this._mailService.addMailBoxes().subscribe(boxes => {
      const mailboxes = boxes.mailboxes;
      console.log('Adding letters');
      const letters = this._mailService.getLetters();
      console.log(letters);
      for (let i = 0; i < letters.letters.length; ++i) {
        letters.letters[i].mailbox = this._mailService.getIdByTitle(mailboxes, letters.letters[i].mailbox);
      }
      this._mailService.addLetters(letters).subscribe();
    });
  }

  public clearMailboxDatabase() {
    console.log('Clearing database');
    this._mailService.deleteMailboxes().subscribe(_ => this._mailService.deleteLetters().subscribe());
  }

  private fillContactsDatabase() {
    this._userService.addUsers().subscribe();
  }

}
