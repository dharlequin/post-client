import {Component, OnInit} from '@angular/core';
import {MailService} from '../../mail.service';
import {UserService} from '../../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  newUserFormControl: FormGroup;

  constructor(
    private _mailService: MailService,
    private _userService: UserService) {
  }

  ngOnInit() {
    this.newUserFormControl = new FormGroup({
      firstName: new FormControl([''], [Validators.minLength(2)]),
      lastName: new FormControl([''], [Validators.minLength(2)]),
      gender: new FormControl([''], [Validators.required]),
      birthdate: new FormControl([''], [this.birthdateValidator]),
      email: new FormControl([''], [Validators.required])
    });
    this.newUserFormControl.valueChanges.subscribe(value => console.log(value));
    this.newUserFormControl.statusChanges.subscribe(value => console.log(value));
  }

  public fillMailboxDatabase() {
    console.log('Adding mailboxes');
    this._mailService.addMailBoxes().subscribe(boxes => {
      const mailboxes = boxes.mailboxes;
      console.log('Adding letters');
      const letters = this._mailService.getLetters();
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

  public fillContactsDatabase() {
    this._userService.addUsers().subscribe();
  }

  public birthdateValidator(formControl: FormControl) {
    const date: Date = formControl.value;
    console.log('Entered date: ' + date);
    const currentDate: Date = new Date();
    console.log('Current date: ' + currentDate);
    if (date !== null) {
      const age: number = currentDate.getDate() - date.getDate();
      console.log(age);
      if (age < 18) {
        return {birthdateValidator: {message: 'User must be older than 18!'}};
      }
    }
    return null;
  }

  public addNewUser() {
    console.log('Entered function');
    const user: User = new User;
    user.birthdate = this.newUserFormControl.controls.birthdate.value;
    user.gender = this.newUserFormControl.controls.gender.value;
    user.email = this.newUserFormControl.controls.email.value;
    user.fullname = this.newUserFormControl.controls.firstName.value + ' ' + this.newUserFormControl.controls.lastName.value;
    console.log('New user built ' + user);
  }

}
