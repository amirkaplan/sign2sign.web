import { Injectable } from '@angular/core';
import { Layout } from '../Models/layout';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  constructor(private db: AngularFirestore) {}

  getLayouts() {
    return this.db.collection('layouts').get();
  }
}
