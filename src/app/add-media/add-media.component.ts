import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { UUID } from 'angular2-uuid';
import { Observable, Subscription } from 'rxjs';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {

  files: File[];

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  constructor(private storage: AngularFireStorage,
    private db: AngularFirestore) { }

  ngOnInit() {
  }

  upload(event) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      const uuid = UUID.UUID();
      this.ref = this.storage.ref(`/images/${uuid}`);
      this.task = this.ref.put(file);
      // const downloadURL = this.storage.ref(`/images/${uuid}`).getDownloadURL().subscribe(
      //   url => console.log(url)
      //   // url => this.db.collection('upload').doc(uuid).set({
      //   //   id: uuid,
      //   //   url: url,
      //   //   path: `/images/${uuid}`
      //   // })
      // );
    }


    // this.uploadProgress = this.task.percentageChanges();

  }
}
