import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }

  public listGames(): Observable<any> {
    return this.http.get<any>(
      'http://www.beckyandjoel.com/boardgames/api/games-list.php',
      { observe: 'response' }
    );
  }

  public addGame(data): Observable<any> {
    console.log('data: ', data);
    return this.http.post<any>(
      'http://www.beckyandjoel.com/boardgames/api/games-list.php',
      JSON.stringify(data),
      { observe: 'response' }
    );
  }
}
