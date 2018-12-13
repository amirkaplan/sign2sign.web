import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/player';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PlayersService } from './players.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(public playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.getPlayers();
  }

  select(player: Player) {
    this.playersService.select(player);
  }

  addPlayer() {
    this.playersService.addPlayer();
  }
}
