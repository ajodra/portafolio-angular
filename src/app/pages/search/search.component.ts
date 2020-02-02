import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private productoService: ProductosService) { }

  ngOnInit() {
    
    //forma de leer el parámetro por URL
    this.route.params.subscribe (params =>{
      this.productoService.buscarProducto (params['termino']);
      console.log(params['termino'])
    });

  }

}
