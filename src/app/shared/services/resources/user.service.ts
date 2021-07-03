import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/users/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseApi = environment.baseAPIUrl;
  registerUser(user: any) {
    return this.http.post(`${this.baseApi}/users`, user);
  }
  getRoles() {
    return this.http.get(`${this.baseApi}/roles`);
  }
  getUsers() {
    return this.http.get(`${this.baseApi}/users`);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.baseApi}/users/${id}`);
  }
  updateUser(id: any, user: any) {
    return this.http.put(`${this.baseApi}/users/${id}`, user);
  }
}
