import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../Models/player';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

@Input() player: Player;
@Input() playMode = false;

  constructor(public playersService: PlayersService,
              private router: Router) { }

  ngOnInit() {
  }

  deletePlayer(id) {
    this.playersService.deletePlayer(id);
  }

  changeLayout(player: Player) {
    this.playersService.select(player);
    this.router.navigate([`/layouts`]);
  }

  play(player: Player) {
    this.playersService.select(player);
    this.router.navigate([`/play`]);
  }
}
