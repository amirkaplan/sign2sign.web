import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-add-layout',
  templateUrl: './add-layout.component.html',
  styleUrls: ['./add-layout.component.css']
})
export class AddLayoutComponent implements OnInit {

  width_1: number;
  height_1: number;
  top_1: number;
  left_1: number;

  width_2: number;
  height_2: number;
  top_2: number;
  left_2: number;

  width_3: number;
  height_3: number;
  top_3: number;
  left_3: number;

  width_4: number;
  height_4: number;
  top_4: number;
  left_4: number;



  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  save() {
    const id = UUID.UUID();
    if (this.width_1 != null) {

      if (this.width_2 == null) {
        this.db.collection('layouts').doc(id).set({
          id: id,
          windows: {
            1: {
              width: this.width_1 + '%',
              height: this.height_1 + '%',
              top: this.top_1 + '%',
              left: this.left_1 + '%'
            }
          }
        });
      } else if (this.width_3 == null) {
        this.db.collection('layouts').doc(id).set({
          id: id,
          windows: {
            1: {
              width: this.width_1 + '%',
              height: this.height_1 + '%',
              top: this.top_1 + '%',
              left: this.left_1 + '%'
            },
            2: {
              width: this.width_2 + '%',
              height: this.height_2 + '%',
              top: this.top_2 + '%',
              left: this.left_2 + '%'
            }
          }
        });
      } else if (this.width_4 == null) {
        this.db.collection('layouts').doc(id).set({
          id: id,
          windows: {
            1: {
              width: this.width_1 + '%',
              height: this.height_1 + '%',
              top: this.top_1 + '%',
              left: this.left_1 + '%'
            },
            2: {
              width: this.width_2 + '%',
              height: this.height_2 + '%',
              top: this.top_2 + '%',
              left: this.left_2 + '%'
            },
            3: {
              width: this.width_3 + '%',
              height: this.height_3 + '%',
              top: this.top_3 + '%',
              left: this.left_3 + '%'
            }
          }
        });
      } else {
        this.db.collection('layouts').doc(id).set({
          id: id,
          windows: {
            1: {
              width: this.width_1 + '%',
              height: this.height_1 + '%',
              top: this.top_1 + '%',
              left: this.left_1 + '%'
            },
            2: {
              width: this.width_2 + '%',
              height: this.height_2 + '%',
              top: this.top_2 + '%',
              left: this.left_2 + '%'
            },
            3: {
              width: this.width_3 + '%',
              height: this.height_3 + '%',
              top: this.top_3 + '%',
              left: this.left_3 + '%'
            },
            4: {
              width: this.width_4 + '%',
              height: this.height_4 + '%',
              top: this.top_4 + '%',
              left: this.left_4 + '%'
            }
          }
        });
      }
    }
  }
}
