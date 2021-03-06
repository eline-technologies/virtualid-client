import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:8080/users';

  constructor(private http: HttpClient) { }

  registerUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/register`, user);
  }

  loginUser(user: User): Observable<Object> {
    var userPassword = {
      name: user.username,
      password: user.password
    }
    return this.http.post(`${this.baseUrl}` + `/login`, userPassword)
  }

}
