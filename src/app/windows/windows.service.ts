import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Window } from '../Models/window';
import { Playlist } from '../Models/plylist';
import { PlayersService } from '../players/players.service';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  selected: Window;

  constructor(private playersService: PlayersService, 
              private db: AngularFirestore) {}

  select(window: Window) {
    this.selected = window;
  }

  changeSelectedWindowPlaylist(playlist: Playlist) {
    this.selected.playlist = playlist;
    const layout = this.playersService.selected.layout;
    for (let i in layout.windows) {
      if (layout.windows[i] === this.selected) {
        layout.windows[i].playlist = playlist;
      }
    }
    this.playersService.changeSelectedPlayerLayout(layout);
  }
}
