import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/player';
import { PlayersService } from './players.service';
import { ScreensService } from '../screens/screens.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(public playersService: PlayersService,
              private screensService: ScreensService,
              private router: Router) { }

  ngOnInit() {
    this.playersService.get();
  }

  add() {
    this.playersService.add();
  }

  select(player: Player) {
    this.screensService.changeSelectedScreenPlayer(player);
    this.router.navigate([`/screens`]);
  }
}
