import { Injectable } from '@angular/core';
import { Layout } from '../Models/layout';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  layoutsRef: AngularFirestoreCollection<Layout>;
  layouts: Observable<Layout[]>;
  
  constructor(private db: AngularFirestore) {}

  get() {
    this.layoutsRef = this.db.collection('layouts');
    this.layouts = this.layoutsRef.valueChanges();
  }

  getLayout(layout_id) {
    return this.db.collection(`layouts`).doc(layout_id).snapshotChanges();
  }
}
