import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenidaComponent} from './bienvenida/bienvenida.component';
import {BusquedasComponent} from './busquedas/busquedas.component';
import {AcercaDeComponent} from './acerca-de/acerca-de.component';
import {PaginaNoEncontrada404Component} from './pagina-no-encontrada404/pagina-no-encontrada404.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'busquedas', component: BusquedasComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '**', component: PaginaNoEncontrada404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
