import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../Models/layout';
import { Window } from '../Models/window';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

 @Input() layout: Layout;
 showPlaylistButton = true;

  constructor() { }

  ngOnInit() {
  }

  changePlaylist(window: Window) {

  }

}
