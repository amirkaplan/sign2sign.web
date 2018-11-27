import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  constructor(public playersService: PlayersService) { }

  ngOnInit() {
  }

}
