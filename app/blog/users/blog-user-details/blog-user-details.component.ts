import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-user-details',
  templateUrl: './blog-user-details.component.html',
  styleUrls: ['./blog-user-details.component.scss']
})
export class BlogUserDetailsComponent implements OnInit {
  user;
  todos;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const userId = this.route.snapshot.params.userId;
    this.blogService.getUserById(userId).subscribe(
      userData => this.user = userData
    );

    this.blogService.getToDosByUserId(userId).subscribe(
      todos => this.todos = todos
    );
  }

  navigateBack() {
    this.router.navigate(['/blog/users']);
  }

}
