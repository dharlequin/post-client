import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class UserService {

  private userList = {
    users: [
      {fullName: 'John Doe', email: 'johndoe@gmail.com', gender: 'M', birthdate: new Date('10.18.1987')},
      {fullName: 'Bob Pitchford', email: 'pitchfordb@gmail.com', gender: 'M', birthdate: new Date('10.03.1988')},
      {fullName: 'Alice McAllan', email: 'mcaliceallan@gmail.com', gender: 'F', birthdate: new Date('09.26.1992')}
    ]
  };

  constructor(private _http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>('http://test-api.javascript.ru/v1/tonyp/users');
  }

  public addUsers(): Observable<any> {
    return this._http.post<any>('http://test-api.javascript.ru/v1/tonyp/', this.userList);
  }

  public remove(id: string) {
    return this._http.delete('http://test-api.javascript.ru/v1/tonyp/users/' + id, {responseType: 'text'});
  }

}
