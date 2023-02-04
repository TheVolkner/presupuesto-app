import { PresupuestoService } from './../presupuesto.service';
import { Egresos } from './egresos.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css'],
  providers:[PresupuestoService]
})
export class EgresosComponent{


   //CREAMOS UN INPUT PARA RECIBIR CADA INGRESO A LISTAR DESDE EL EL PADRE Y EL TOTAL DE INGRESOS
   //PARA CALCULAR EL PORCENTAJE
  @Input() egreso:Egresos;
  @Input() totalIngresos:number;
   //CREAMOS UN EVENTEMITTER PARA ENVIAR EL OBJETO A ELIMINAR
  @Output() egresoEliminar = new EventEmitter<Egresos>();

  porcentajeEgreso:number = 0;
  porcentajeString:string = "";

    //PARA ELIMINAR UN INGRESO, ENVIAMOS EL OBJETIVO AL PADRE APPCOMPONENT
    eliminarEgreso(egreso:Egresos):void{

      this.egresoEliminar.emit(egreso);
   }

}
