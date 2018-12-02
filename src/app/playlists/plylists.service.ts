import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Playlist } from '../Models/plylist';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private playlistsRef: AngularFirestoreCollection<Playlist>;
  playlists: Observable<Playlist[]>;
  selectedPlaylist: Playlist;

  constructor(private db: AngularFirestore) { }

  getPlaylists() {
    this.playlistsRef = this.db.collection('playlists');
    this.playlists = this.playlistsRef.valueChanges();
  }

  selectPlaylist(playlist: Playlist) {
    this.selectedPlaylist = playlist;
  }

  addPlaylist() {
    const id =  UUID.UUID();
    this.db.collection('playlists').doc(id).set({
      id: id
    });
  }

  deletePlaylist(id) {
    this.db.collection('playlists').doc(id).delete();
  }
}
