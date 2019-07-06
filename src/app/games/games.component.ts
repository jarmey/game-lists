import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {

  gameList = [];

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.gamesService.listGames().subscribe((res) => {
    console.log('response: ', res.body);
    this.gameList = res.body;
    });
  }

}
