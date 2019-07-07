import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  gameList = [];

  addGame = {
    'name': '',
    'edition': '',
    'desc': ''
  };

  constructor(
    private gamesService: GamesService
  ) { }

  getGameList() {
    this.gamesService.listGames().subscribe((res) => {
      this.gameList = res.body;
    });
  }

  saveAddGame() {
    console.log('add game: ', this.addGame);
  }

  ngOnInit() {
    this.getGameList();
  }

}
