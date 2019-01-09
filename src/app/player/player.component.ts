import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../Models/player';
import { Screen } from '../Models/screen';
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
@Input() screen: Screen;
@Input() playMode = false;

  constructor(public playersService: PlayersService,
              private router: Router) { }

  ngOnInit() {
  }

  changeLayout(player: Player) {
    this.playersService.select(player);
    this.router.navigate([`/layouts`]);
  }

  delete(id) {
    this.playersService.delete(id);
  }
}
