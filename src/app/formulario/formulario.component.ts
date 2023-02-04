import { Ingresos } from './../ingresos/ingresos.model';
import { Egresos } from './../egresos/egresos.model';
import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //CREAMOS LOS ATRIBUTOS VINCULADOS CON LOS CAMPOS DE LA PLANTILLA
   asunto: string = "Prueba"
   monto:number = 10;
   registro:number = 1;

   //GENERAMOS OBJETOS DE TIPO INGRESO O EGRESO PARA CREAR EL REGISTRO RESPECTIVO
   ingreso: Ingresos;
   egreso: Egresos;

   //GENERAMOS SALIDAS PARA ENVIAR LOS INGRESOS O EGRESOS AL COMPONENTE PADRE
   @Output() envioIngreso = new EventEmitter<Ingresos>();
   @Output() envioEgreso = new EventEmitter<Egresos>();

   enviarRegistro():void{

    if(this.asunto == "" || this.asunto == "" || this.monto == undefined){

       alert("No debe dejar el asunto y el monto vacios...");
       return;
    }


    if(this.registro > 0){

       console.log("Generando un ingreso.");
       this.ingreso = new Ingresos(this.asunto,this.monto);
       this.envioIngreso.emit(this.ingreso);

    } else {

      console.log("Generando un egreso.");
      this.egreso = new Egresos(this.asunto,this.monto,0);
      this.envioEgreso.emit(this.egreso);
    }

   }
}
