import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Servicio para poder leer el URL
  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }


  //Producto Descripcion
  producto: ProductoDescripcion;
  id: string;

  ngOnInit() {

    //Llamamos a la instrucción. Subscribe esta pendiente de los cambios que se produzcan con los parámetros del URL
    this.route.params.subscribe(parametros => {

      //De los parámetros nos interesa en concreto el id
      //console.log(parametros['id']);

      this.productoService.getProducto(parametros['id']).subscribe ((producto:ProductoDescripcion) =>{
        this.id = parametros['id'];
        this.producto = producto;
        console.log(producto);

      });


    });

  }

}
