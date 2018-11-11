import { Component, OnInit } from '@angular/core';
import { LayoutsService } from '../layouts.service';
import { Layout } from '../Models/layout';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  private layouts: Layout[];

  constructor(private layoutsService: LayoutsService) { }

  ngOnInit() {
    this.getLayouts();
  }

  getLayouts() {
    this.layoutsService.getLayouts().subscribe(
      (layouts: Layout[]) => this.layouts = layouts
    );
  }

}
