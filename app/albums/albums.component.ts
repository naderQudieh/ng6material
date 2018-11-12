import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(
      albums => this.albums = albums
    );
  }

}
