import { Component, OnInit, Input } from '@angular/core';
import { ScreensService } from '../screens/screens.service';
import { Screen } from '../Models/screen'
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  @Input() screen: Screen;
  @Input() playMode = false;

  constructor(public screensService: ScreensService,
              private router: Router) { }

  ngOnInit() {
  }

  changePlayer(screen: Screen) {
    this.screensService.select(screen);
    this.router.navigate([`/players`]);
  }

  play(screen: Screen) {
    // set selected player for screen
    this.screensService.select(screen);
    this.router.navigate([`/play`]);
  }

  delete(id) {
    this.screensService.delete(id);
  }



}
