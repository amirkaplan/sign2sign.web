import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Medium } from '../Models/medium';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private mediaRef: AngularFirestoreCollection<Medium>;
  media: Observable<Medium[]>;
  selectedMedia: Medium[] = [];


  constructor(private db: AngularFirestore) { }

  getMedia() {
    this.mediaRef = this.db.collection('media');
    this.media = this.mediaRef.valueChanges();
  }

  deleteMedia(id) {
    this.db.collection('media').doc(id).delete();
  }

  selectMedium(medium: Medium) {
      this.selectedMedia.push(medium);
  }

  deselectMedium(medium: Medium) {
    const index = this.selectedMedia.indexOf(medium);
    if (index > -1) {
      this.selectedMedia.splice(index, 1);
    }
  }

}
