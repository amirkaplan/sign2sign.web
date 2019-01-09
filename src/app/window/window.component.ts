import { Component, OnInit, Input } from '@angular/core';
import { Window } from '../Models/window';
import { WindowsService } from '../windows/windows.service';
import { Router } from '@angular/router';
import { Player } from '../Models/player';
import { PlayersService } from '../players/players.service';
import { Medium } from '../Models/medium';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  @Input() window: Window;
  @Input() player: Player;
  @Input() playMode = false;

  showMedium: Medium;

  constructor(private windowsService: WindowsService,
    private playersService: PlayersService,
    private router: Router) { }

  ngOnInit() {
    this.play();
  }

  changePlaylist(window: Window) {
    this.windowsService.select(window);
    this.playersService.select(this.player);
    this.router.navigate([`/playlists/${window.id}`]);
  }

  play() {
    if (this.window.playlist && this.window.playlist.media.length > 0) {
      let i = 0;
      setInterval(() => {
        this.showMedium = this.window.playlist.media[i];
        i++;
        if (i >= this.window.playlist.media.length) {
          i = 0;
        }
      }, 1000);
    }
  }
}
