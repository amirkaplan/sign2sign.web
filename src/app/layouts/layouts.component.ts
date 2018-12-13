import { Component, OnInit } from '@angular/core';
import { Layout } from '../Models/layout';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlayersService } from '../players/players.service';
import { LayoutsService } from './layouts.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  constructor(private playersService: PlayersService,
              public layoutsService: LayoutsService,
              private router: Router) { }

  ngOnInit() {
    this.layoutsService.get();
  }

  select(layout) {
    this.playersService.changeSelectedPlayerLayout(layout);
    this.router.navigate([`/players`]);
  }
}
