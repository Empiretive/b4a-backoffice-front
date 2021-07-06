import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  baseApi = environment.baseAPIUrl;
  constructor(private http: HttpClient) {}
  getRoles() {
    return this.http.get(`${this.baseApi}/roles`);
  }
}
