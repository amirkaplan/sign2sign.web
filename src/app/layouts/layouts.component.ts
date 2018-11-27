import { Component, OnInit } from '@angular/core';
import { Layout } from '../Models/layout';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  player_id: string;

  layoutsRef: AngularFirestoreCollection<Layout>;
  layouts: Observable<Layout[]>;

  constructor(private playersService: PlayersService,
              private db: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.player_id = this.route.snapshot.params['player_id'];
    this.getLayouts();
  }

  getLayouts() {
    this.layoutsRef = this.db.collection('layouts');
    this.layouts = this.layoutsRef.valueChanges();
  }

  selectLayout(layout) {
    this.playersService.changeSelectedPlayerLayout(layout);
    this.router.navigate([`/players`]);
  }
}
