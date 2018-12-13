import { Component, OnInit, Input } from '@angular/core';
import { MediaService } from './media.service';
import { Medium } from '../Models/medium';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlaylistsService } from '../playlists/plylists.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  @Input() media: Observable<Medium[]>;

  playlist_id: string;

  constructor(public mediaService: MediaService,
    private playlistService: PlaylistsService,
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   // this.playlist_id = this.route.snapshot.params['player_id'];
      this.mediaService.get();
  }

  select(medium: Medium) {
    this.mediaService.select(medium);
  }
  
  deselect(medium: Medium) {
    this.mediaService.deselect(medium);
  }

  add() {
    this.playlistService.addMedia2selectedPlaylist(this.mediaService.selectedMedia);
  }
}
