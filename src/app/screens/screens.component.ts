import { Component, OnInit } from '@angular/core';
import { ScreensService } from './screens.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  constructor(public screensService: ScreensService) { }

  ngOnInit() {
    this.screensService.get();
  }

  add() {
    this.screensService.add();
  }

}
