import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/player';
import { Layout } from '../Models/layout';
import { Window } from '../Models/window';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { PlayersService } from './players.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(public playersService: PlayersService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playersService.getPlayers();
  }

  selectPlayer(player: Player) {
    this.playersService.selectPlayer(player);
  }

  addPlayer() {
    this.playersService.addPlayer();
  }
}
