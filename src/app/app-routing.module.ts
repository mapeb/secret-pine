import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './board/board.component';

const routes: Routes = [
  {path: '', redirectTo: 'tablero', pathMatch: 'full'},
  {path: 'tablero', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
