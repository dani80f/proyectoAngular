import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {

  private url="https://67d0073d823da0212a844849.mockapi.io/producto";

  constructor( private http: HttpClient) {


  }

  getProductos(): Observable<any[]> {

    return this.http.get<any[]>(this.url);

  }


  getProducto(id: string): Observable<any> {

    return this.http.get<any>(`${this.url}/${id}`);
  }

  createProducto(post: any): Observable<any> {
    return this.http.post<any>(this.url, post);

  }

  updateProducto(id: string, post: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, post);

  }



  deleteProducto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
