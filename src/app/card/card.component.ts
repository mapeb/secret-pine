import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../domain/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Person;

  constructor() { }

  ngOnInit() {
  }

}
