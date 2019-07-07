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

  getGameList() {
    this.gamesService.listGames().subscribe((res) => {
      this.gameList = res.body;
    });
  }

  ngOnInit() {
    this.getGameList();
  }

}
