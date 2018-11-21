import { Component, OnInit } from '@angular/core';
import { LayoutsService } from './layouts.service';
import { Layout } from '../Models/layout';
import { Window } from '../Models/window';
import { WindowsService } from '../windows/windows.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  public layouts: Layout[];

  constructor(private layoutsService: LayoutsService,
              private windowsService: WindowsService) { }

  ngOnInit() {
    this.getLayouts();
  }

  getLayouts() {
    this.layoutsService.getLayouts().subscribe(
      (layouts: any) => {
        this.layouts = layouts.docs.map(l => {
          const layout: Layout = l.data();
          layout.id = l.id;
          this.windowsService.getWindows(layout.id).subscribe(
            (windows: any) => {
              layout.windows = windows.docs.map(w => {
                const window: Window = w.data();
                window.id = w.id;
                return window;
              });
            });
          return layout;
        });
      console.log(this.layouts);

      });
  }
}
