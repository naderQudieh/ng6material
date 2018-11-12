import { Component, OnInit, Inject } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  photos = [];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    const albumId = this.route.snapshot.params.albumId;

    this.albumService.getPhotosByAlbumId(albumId).subscribe(
      (photos: any[]) => this.photos = photos
    );
  }

  openDialog(photoId): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { photoId: photoId }
    });
  }

}

