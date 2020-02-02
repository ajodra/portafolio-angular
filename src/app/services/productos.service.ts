import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //Inicializar
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise ((resolve,reject) => {

      this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {

        console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve();

        //Para probar la carga
        //setTimeout(() => {
        //  this.cargando = false;
        //}, 2000);

      });

    });


    }

    //Método para traer de Firebase la información del producto
    getProducto (id:string) {

      return this.http.get(`https://angular-html-16733.firebaseio.com/productos/${id}.json`)

    }

    buscarProducto (termino:string) {
      
      //Si no existen datos
      if (this.productos.length === 0 ) {
        //cargar productos
        this.cargarProductos().then(() => {
          //Ejecutar después de tener los productos
          //Aplicar filtro
          this.filtrarProductos(termino);

        });

      } 
      //En caso contrario = si ya tenemos los productos cargados
      //Podemos empezar a aplicar el filtro
      else {
        //Aplicar el filtro
        this.filtrarProductos(termino);
      }

    }

    //private filtrarProductos (termino:string) {
    public filtrarProductos (termino:string) {

      console.log(this.productos);
      this.productosFiltrado = [];
      
      termino = termino.toLocaleLowerCase();

      this.productos.forEach (prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();

        if (prod.categoria.indexOf(termino) >= 0 || (tituloLower.indexOf(termino) >= 0) ) {
          this.productosFiltrado.push(prod);
        }

      });

    }

}

