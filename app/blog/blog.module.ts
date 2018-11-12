import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { SnackBarComponent } from './posts/snack-bar/snack-bar.component';
import { BlogUserDetailsComponent } from './users/blog-user-details/blog-user-details.component';
import { UserCardComponent } from '../shared/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  entryComponents: [SnackBarComponent],
  declarations: [PostsComponent, UsersComponent, TodosComponent, SnackBarComponent, BlogUserDetailsComponent, UserCardComponent],
  exports: [ CommonModule, UserCardComponent ]
})
export class BlogModule { }
