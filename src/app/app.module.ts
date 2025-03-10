import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CommonModule } from '@angular/common';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PaginaNoEncontrada404Component } from './pagina-no-encontrada404/pagina-no-encontrada404.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BusquedasComponent,
    AcercaDeComponent,
    PaginaNoEncontrada404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
