import {Component, OnInit} from '@angular/core';
import {Game, Person} from '../../domain/game';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards: Person[];
  game: Game;

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.game = new Game(['humano', 'persona', 'gente', 'hombre', 'mujer', 'familia', 'amigo', 'conocido', 'colega', 'pareja', 'esposo', 'matrimonio', 'amor', 'cuello', 'corazón', 'mente', 'alma', 'cintura', 'cadera', 'corazón', 'espalda', 'sangre', 'carne', 'piel', 'hueso', 'pecho', 'resfriado', 'diarrea', 'enfermedad', 'cerdo', 'caballo', 'yegua', 'oveja', 'mono', 'ratón', 'rata', 'tigre', 'conejo', 'dragón', 'ciervo', 'rana', 'león', 'jirafa', 'elefante', 'pájaro', 'gallina', 'gorrión', 'cuervo', 'jueves', 'viernes', 'sábado', 'domingo', 'ambiente', 'espacio', 'entorno', 'sol', 'luna', 'estrella', 'clima', 'despejado', 'nublado', 'lluvia', 'nieve', 'aguja', 'clavo', 'hilo', 'cuerda', 'cordel', 'cordón', 'bolsillo', 'bolso', 'bolsa', 'paraguas', 'parasol', 'pomo', 'llave', 'trancar', 'arma', 'escultura', 'cuadro']);
  }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cards = this.game.getCards();
  }
}
