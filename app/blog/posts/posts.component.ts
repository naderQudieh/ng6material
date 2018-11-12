import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;
  name;
  email;
  comment;
  commentId = 501;

  constructor(private blogService: BlogService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }

  toggleComments(postId, currentPanel) {
    currentPanel.showComments = !currentPanel.showComments;
    this.blogService.getCommentsByPostId(postId).subscribe(
      comments => currentPanel.comments = comments
    );
  }

  likeComment(comment) {
    comment.liked = !comment.liked;
  }

  leaveComment(postId, comments) {
    let newComment = {
      "postId": postId,
      "id": this.commentId,
      "name": this.name,
      "email": this.email,
      "body": this.comment
    }

    comments.push(newComment);

    this.openSnackBar(1000);

    this.commentId++;

    this.name = "";
    this.email = "";
    this.comment = "";
  }

  openSnackBar(duration) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: duration,
    });
  }

}
