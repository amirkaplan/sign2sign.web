import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './plylists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(public playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.playlistsService.getPlaylists();
  }

  addPlaylist() {
    this.playlistsService.addPlaylist();
  }

}
