import { Component, OnInit } from '@angular/core';
import { ScreensService } from '../screens/screens.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(public screensService: ScreensService) { }

  ngOnInit() {}

}
