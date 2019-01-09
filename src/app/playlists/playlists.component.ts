import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './plylists.service';
import { Playlist } from '../Models/plylist';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowsService } from '../windows/windows.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  window_id: string;

  constructor(public playlistsService: PlaylistsService,
              private windowsService: WindowsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.window_id = this.route.snapshot.params['window_id'];
    this.playlistsService.get();
  }

  add() {
    this.playlistsService.add();
  }

  select(playlist: Playlist) {
    this.windowsService.changeSelectedWindowPlaylist(playlist);
    this.router.navigate([`/screens`]);
  }
}
