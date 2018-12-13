import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Player } from '../Models/player';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { Layout } from '../Models/layout';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private playersRef: AngularFirestoreCollection<Player>;
  players: Observable<Player[]>;
  selected: Player;


  constructor(private db: AngularFirestore) {}

  getPlayers() {
    this.playersRef = this.db.collection('players');
    this.players = this.playersRef.valueChanges();
  }

  select(player: Player) {
    this.selected = player;
  }

  addPlayer() {
    const id =  UUID.UUID();
    this.db.collection('players').doc(id).set({
      id: id,
      layout: {
        windows: {
          1: {
            width: '100%',
            height: '100%',
            top: '0%',
            left: '0%'
          }
        }
      }
    });
  }

  deletePlayer(id) {
    this.db.collection('players').doc(id).delete();
    this.selected.layout = null;
  }

  changeSelectedPlayerLayout(layout: Layout) {
    this.selected.layout = layout;
    this.db.collection('players').doc(this.selected.id).set(this.selected);
  }
}
