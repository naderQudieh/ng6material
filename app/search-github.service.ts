import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get('https://api.github.com/users');
  }

  getUserById(userName: string) {
    return this.http.get('https://api.github.com/users/' + userName);
  }
}
