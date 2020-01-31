import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
 
  constructor(private http: HttpClient) {

    console.log("Servicio inPagina Listo");
  
    //Leer JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe ( resp => {

        //console.log (resp);
        //console.log (resp['twitter']);
        //console.log (resp['email']);
        this.cargada = true;
        this.info = resp;

        console.log (resp);

      } 
        
      
    )

  }
 
}

