import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
 
  constructor(private http: HttpClient) {

    //console.log("Servicio inPagina Listo");
    this.cargarInfo();
    this.cargarEquipo();

  }

  //Cargar los datos de JSON
  private cargarInfo() {

    //Leer JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe ( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        //console.log(resp)
      });
  }

  //Cargar los datos de Firebase
  private cargarEquipo() {
    //Leer JSON
    this.http.get('https://angular-html-16733.firebaseio.com/equipo.json')
      .subscribe ( (resp: any []) => {

        this.equipo = resp;
        console.log(resp)
      });

  }




}

