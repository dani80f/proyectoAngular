import {Component, OnInit} from '@angular/core';
import {ApiService} from '../servicios/api.service';

@Component({
  selector: 'app-busquedas',
  standalone: false,
  templateUrl: './busquedas.component.html',
  styleUrl: './busquedas.component.css'
})
export class BusquedasComponent implements OnInit {
  partidos: any[] = [];

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {

    console.log('Inicializando BusquedasComponent');
    this.apiService.getPartidosEuro().subscribe(

      (data) => {

        this.partidos = data.matches;

      },
      (error) => {

        console.error('Error al obtener los partidos:', error);
      }
    );


  }




}
