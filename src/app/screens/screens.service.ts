import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { Player } from '../Models/player';
import { Screen } from '../Models/screen'

@Injectable({
  providedIn: 'root'
})
export class ScreensService {

  private screensRef: AngularFirestoreCollection<Screen>;
  screens: Observable<Screen[]>;
  selected: Screen;

  constructor(private db: AngularFirestore) { }

  get() {
    this.screensRef = this.db.collection('screens');
    this.screens = this.screensRef.valueChanges();
  }

  select(screen: Screen) {
    this.selected = screen;
  }

  add() {
    const id = UUID.UUID();
    this.db.collection('screens').doc(id).set({ id: id });
  }

  delete(id) {
    this.db.collection('screens').doc(id).delete();
  }

  changeSelectedScreenPlayer(player: Player) {
    this.selected.player = player;
    this.db.collection('screens').doc(this.selected.id).set(this.selected);
  }
}
