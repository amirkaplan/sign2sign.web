import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Medium } from '../Models/medium';

@Component({
  selector: 'app-playlist-media',
  templateUrl: './playlist-media.component.html',
  styleUrls: ['./playlist-media.component.css']
})
export class PlaylistMediaComponent implements OnInit {

  @Input() media: Observable<Medium[]>;

  constructor() { }

  ngOnInit() {
  }

}
