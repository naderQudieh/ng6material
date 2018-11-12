import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getCommentsByPostId(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getToDos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getToDosByUserId(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + userId);
  }

  leaveComment(newComment) {
    // it has no effect as it is not adding the value to the server. it imitates only.
    this.http.post('https://jsonplaceholder.typicode.com/comments', JSON.stringify({ newComment }));
  }

}
