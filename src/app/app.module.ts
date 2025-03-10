import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HttpClientModule } from '@angular/common/http';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PaginaNoEncontrada404Component } from './pagina-no-encontrada404/pagina-no-encontrada404.component';
import { PipePipe } from './pipes/pipe.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BusquedasComponent,
    AcercaDeComponent,
    PaginaNoEncontrada404Component,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
