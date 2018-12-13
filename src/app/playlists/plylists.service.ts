import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Playlist } from '../Models/plylist';
import { UUID } from 'angular2-uuid';
import { Medium } from '../Models/medium';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private playlistsRef: AngularFirestoreCollection<Playlist>;
  playlists: Observable<Playlist[]>;
  selected: Playlist;

  constructor(private db: AngularFirestore) { }

  get() {
    this.playlistsRef = this.db.collection('playlists');
    this.playlists = this.playlistsRef.valueChanges();
  }

  select(playlist: Playlist) {
    this.selected = playlist;
  }

  add() {
    const id = UUID.UUID();
    this.db.collection('playlists').doc(id).set({
      id: id
    });
  }

  delete(id) {
    this.db.collection('playlists').doc(id).delete();
  }

  addMedia2selectedPlaylist(media: Medium[]) {
    if (this.selected.media === undefined) {
      this.selected.media = media;
    } else {
      media.forEach(medium => {
        this.selected.media.push(medium);
      });
    }
    this.db.collection('playlists').doc(this.selected.id).set(this.selected);
  }
}
