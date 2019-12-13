import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards: string[];

  constructor() {
  }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cards = Array(25).fill('Gato');
  }
}
