import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Window } from '../Models/window';
import { Playlist } from '../Models/plylist';
import { PlayersService } from '../players/players.service';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  selectedWindow: Window;

  constructor(private playersService: PlayersService, 
              private db: AngularFirestore) {}

  select(window: Window) {
    this.selectedWindow = window;
  }

  changeSelectedWindowPlaylist(playlist: Playlist) {
    this.selectedWindow.playlist = playlist;
    const layout = this.playersService.selected.layout;
    for (let i in layout.windows) {
      if (layout.windows[i] === this.selectedWindow) {
        layout.windows[i].playlist = playlist;
      }
    }
    this.playersService.changeSelectedPlayerLayout(layout);
  }
}
