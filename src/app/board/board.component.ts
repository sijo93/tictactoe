import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  winner = null;
  squares = Array(9).fill(null);
  player = 'X';
  constructor() { }

  ngOnInit() {
  }

  move(position) {
    if (!this.winner && !this.squares[position]) {
      this.squares[position] = this.player;
      if (this.winningmove()) {
        this.winner = this.player;
      }
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }

  winningmove(): boolean {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      if (this.squares[line[0]] && this.squares[line[0]] === this.squares[line[1]]) {
        return true;
      }
    }
    return false;
  }

  get status() {
    return this.winner ? `Winner: ${this.winner}` : `Player: ${this.player}`;
  }

  new() {
    this.winner = null;
    this.squares = Array(9).fill(null);
    this.player = 'X';

  }

}
