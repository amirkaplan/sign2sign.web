import { Component, OnInit, Input } from '@angular/core';
import { PlaylistsService } from '../playlists/plylists.service';
import { Playlist } from '../Models/plylist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input() playlist: Playlist;

  constructor(public playlistsService: PlaylistsService,
              private router: Router) { }

  ngOnInit() {
  }

  addMedia(playlist: Playlist) {
    this.playlistsService.selectPlaylist(playlist);
    this.router.navigate([`/media/${playlist.id}`]);
  }

  deletePlaylist(id) {
    this.playlistsService.deletePlaylist(id);
  }

}
