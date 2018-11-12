import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule } from '@angular/forms';
import { SearchGithubComponent } from './search-github/search-github.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { BotinakComponent } from './botinak/botinak.component';
import { DialogComponent } from './album-details/dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TableComponent,
    ListComponent,
    PanelComponent,
    SearchGithubComponent,
    UserDetailsComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    BotinakComponent,
    DialogComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
