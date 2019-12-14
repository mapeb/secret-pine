import * as _ from 'lodash';

export class Game {
  public blueSpies: Person[] = [];
  public redSpies: Person[] = [];
  public blackSpies: Person;
  public innocents: Person[] = [];

  constructor(words: string[]) {

    const unOrdenedWords = _.shuffle(words);

    this.blackSpies = {word: unOrdenedWords.shift(), team: Color.Black};

    if (Math.random() >= 0.5) {
      this.redSpies.push({word: unOrdenedWords.shift(), team: Color.Red});
    } else {
      this.blueSpies.push({word: unOrdenedWords.shift(), team: Color.Blue});
    }

    unOrdenedWords.forEach((word, index) => {
      if (index <= 7) {
        this.innocents.push({word, team: Color.White});
      } else if (index <= 15) {
        this.blueSpies.push({word, team: Color.Blue});
      } else if (index <= 22) {
        this.redSpies.push({word, team: Color.Red});
      } else {
        return;
      }
    });
  }

  getCards(): Person[] {
    return _.shuffle([...this.blueSpies, ...this.redSpies, ...this.innocents, this.blackSpies]);
  }
}

export interface Person {
  word: string;
  team: Color;
}

enum Color {
  Blue,
  Red,
  Black,
  White,
}
