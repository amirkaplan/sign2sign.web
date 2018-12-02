import { Component, OnInit, Input } from '@angular/core';
import { Medium } from '../Models/medium';
import { MediaService } from '../media/media.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {

  @Input() medium: Medium;

  constructor(public mediaService: MediaService,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    // this.storage.ref(this.medium.path).getDownloadURL().subscribe(
    //   url => this.medium.url = url
    // );
  }

  selectMedium(medium: Medium) {
    this.mediaService.selectMedium(medium);
  }

}
