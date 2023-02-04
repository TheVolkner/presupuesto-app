import { Egresos } from './egresos/egresos.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingresos } from './ingresos/ingresos.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor() { }


  //CREAMOS LOS EMISORES QUE ENVIARAN A LOS COMPONENTES DE INGRESO Y EGRESO LOS LISTADOS
  listadoIngresos = new EventEmitter<Ingresos[]>();

   listadoEgresos = new EventEmitter<Egresos[]>();

  //CREAMOS EL EMISOR PARA LOS TOTALES

  sumaIngresos = new EventEmitter<number>();
  sumaEgresos = new EventEmitter<number>();

  //CREAMOS EL EMISOR PARA EL PORCENTAJE

  porcentajeEgresos = new EventEmitter<number>();

  ingresosTotales:number = 0;
  egresosTotales:number = 0;

  porcentaje:number = 0;
  porcentajeString:string = "";

  //GENERAMOS EL TOTAL DE INGRESOS
  totalIngresos(ingresos:Ingresos[]):number{

    this.ingresosTotales = 0;

      ingresos.forEach(element => {

          this.ingresosTotales += element.monto;
      });

      return this.ingresosTotales;
    }

  //GENERAMOS EL TOTAL DE EGRESOS
  totalEgresos(egresos:Egresos[]):number{

    this.egresosTotales = 0;

    egresos.forEach(element => {

        this.egresosTotales += element.monto;
    });

   return this.egresosTotales;
  }

  //AGREGAMOS UN INGRESO LISTANDOLO AL FINAL DEL ARRAY
  agregarIngreso(ingreso:Ingresos,ingresos:Ingresos[]):Ingresos[]{

    ingresos.push(ingreso);

    return ingresos;
  }

  //AGREGAMOS UN EGRESO LISTANDOLO AL FINAL DEL ARRAY
  agregarEgreso(egreso:Egresos,egresos:Egresos[]):Egresos[]{

    egresos.push(egreso);

    return egresos;
  }


  //ELIMINAMOS UN INGRESO SEGUN EL ASUNTO
  eliminarIngreso(ingreso:Ingresos,ingresos:Ingresos[]):Ingresos[]{

    //LEEMOS LOS INGRESOS DEL ARREGLO DE INGRESOS.
    for (let i = 0; i < ingresos.length; i++) {
      //COMPARAMOS CADA UNO CON EL RECIBIDO, Y DONDE EXISTA, LO ELIMINAMOS
      const element = ingresos[i];
      if(ingreso.monto == element.monto){

        //ELIMINAMOS EL INDEX ESPECIFICADO, E INDICAMOS QUE SOLO SE BORRARA UN ELEMENTO.
         ingresos.splice(i,1);
      }

    }
    //RETORNAMOS EL ARRAY DE INGRESOS LISTO
    return ingresos;
  }

   //ELIMINAMOS UN EGRESO SEGUN EL ASUNTO
   eliminarEgreso(egreso:Egresos,egresos:Egresos[]):Egresos[]{

    //LEEMOS LOS EGRESOS DEL ARREGLO DE EGRESOS.
    for (let i = 0; i < egresos.length; i++) {
      //COMPARAMOS CADA UNO CON EL RECIBIDO, Y DONDE EXISTA, LO ELIMINAMOS
      const element = egresos[i];
      if(egreso.monto == element.monto){

        //ELIMINAMOS EL INDEX ESPECIFICADO, E INDICAMOS QUE SOLO SE BORRARA UN ELEMENTO.
         egresos.splice(i,1);
      }

    }
    //RETORNAMOS EL ARRAY DE EGRESOS LISTO
    return egresos;
  }

  }


