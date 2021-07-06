import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  baseApi = environment.baseAPIUrl;
  constructor(private http: HttpClient) {}

  getUserStates() {
    return this.http.get(`${this.baseApi}/states/users`);
  }
}
