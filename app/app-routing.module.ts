import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { PanelComponent } from './panel/panel.component';
import { SearchGithubComponent } from './search-github/search-github.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { BotinakComponent } from './botinak/botinak.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './blog/posts/posts.component';
import { UsersComponent } from './blog/users/users.component';
import { TodosComponent } from './blog/todos/todos.component';
import { BlogUserDetailsComponent } from './blog/users/blog-user-details/blog-user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'list', component: ListComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'search-github', component: SearchGithubComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:albumId', component: AlbumDetailsComponent },
  { path: 'botinak', component: BotinakComponent },
  { path: 'blog', component: BlogComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:userId', component: BlogUserDetailsComponent },
      { path: 'todos', component: TodosComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
