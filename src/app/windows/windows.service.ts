import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  constructor(private db: AngularFirestore) {}

  getWindows(layout_id) {
    return this.db.collection(`layouts/${layout_id}/windows`).get();
  }
}
