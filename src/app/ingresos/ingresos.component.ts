import { PresupuestoService } from './../presupuesto.service';
import { Ingresos } from './ingresos.model';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {

  //CREAMOS UN INPUT PARA RECIBIR CADA INGRESO A LISTAR DESDE EL EL PADRE
  @Input()ingreso:Ingresos;
  //CREAMOS UN EVENTEMITTER PARA ENVIAR EL OBJETO A ELIMINAR
  @Output() ingresoEliminar = new EventEmitter<Ingresos>();

  //PARA ELIMINAR UN INGRESO, ENVIAMOS EL OBJETIVO AL PADRE APPCOMPONENT
  eliminarIngreso(ingreso:Ingresos):void{

     this.ingresoEliminar.emit(ingreso);
  }
}
