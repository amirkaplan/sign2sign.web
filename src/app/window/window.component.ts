import { Component, OnInit, Input } from '@angular/core';
import { Window } from '../Models/window';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  @Input() window: Window;

  constructor() { }

  ngOnInit() {
  }

}
