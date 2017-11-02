import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {User} from '../../user';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent implements OnInit {
  private users: User[];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.updateUsers();
  }
  private updateUsers() {
    this._userService.getAllUsers().subscribe(users => this.users = users);
  }

  private removeUser(id: string) {
    this._userService.remove(id).subscribe(_ => this.updateUsers());
  }

}
