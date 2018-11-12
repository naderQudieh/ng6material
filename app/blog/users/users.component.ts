import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogService.getUsers().subscribe(
      users => this.users = users
    );
  }

  openUser(userId) {
    this.router.navigateByUrl('/blog/users/'+ userId);
  }

}
