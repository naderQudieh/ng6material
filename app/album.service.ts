import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private photosByAlbumId: Observable<any[]>;

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotosByAlbumId(albumId) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
  }

  getPhotoById(photoId) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/' + photoId);
  }
}
