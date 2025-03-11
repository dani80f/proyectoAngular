import {Component, OnInit} from '@angular/core';
import { ApiProductoService } from '../servicios/api-producto.service';


@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  nuevoProducto = { nombre: '', precio: 0, stock: 0 };
  productoSeleccionado: any = null;

  constructor(private apiProductos: ApiProductoService) {

  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.apiProductos.getProductos().subscribe(

      (data) => {

        this.productos = data;

      },
      (error) => {

        console.error('Error al cargar los productos:', error);

      }

    );


  }

  crearProducto(): void {
    this.apiProductos.createProducto(this.nuevoProducto).subscribe(

      (data) => {

        this.productos.push(data);
        this.nuevoProducto = { nombre: '', precio: 0, stock: 0 };

      },
      (error) => {

        console.error('Error al crear el producto:', error);


      }
    );
  }


  actualizarProducto(): void {
    this.apiProductos.updateProducto(this.productoSeleccionado.id, this.productoSeleccionado).subscribe(

        (data) => {


          this.productoSeleccionado = null;

        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
        }
      );
  }

  eliminarProducto(id: string): void {

    this.apiProductos.deleteProducto(id).subscribe(

      () => {
        this.productos = this.productos.filter((p) => p.id !== id);
      },

      (error) => {

        console.error('Error al eliminar el producto:', error);

      }

    );

  }

}
