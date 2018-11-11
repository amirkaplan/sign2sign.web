import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../Models/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

 @Input() layout: Layout;

  constructor() { }

  ngOnInit() {
  }

}
