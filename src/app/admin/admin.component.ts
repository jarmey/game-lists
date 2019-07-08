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

  resetAddGame() {
    this.addGame.name = '';
    this.addGame.edition = '';
    this.addGame.desc = '';
  }

  getGameList() {
    this.gamesService.listGames().subscribe((res) => {
      this.gameList = res.body;
    });
  }

  saveAddGame() {
    this.gamesService.addGame(this.addGame).subscribe((res) => {
      this.gameList.push(res.body);
      this.resetAddGame();
    });
  }

  ngOnInit() {
    this.getGameList();
  }

}
