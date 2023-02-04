import { Egresos } from './../egresos/egresos.model';
import { Ingresos } from './../ingresos/ingresos.model';
import { PresupuestoService } from './../presupuesto.service';
import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private presupuestoService:PresupuestoService){

      this.presupuestoService.listadoIngresos.subscribe(
        (ingresosNuevos:Ingresos[]) => {

          this.listaIngresos = ingresosNuevos;

        });

        this.presupuestoService.listadoEgresos.subscribe(
          (egresosNuevos:Egresos[]) => {

            this.listaEgresos = egresosNuevos;

        });

      this.presupuestoService.sumaIngresos.subscribe(
        (sumaIngreso:number) => {

          this.totalIngresos = sumaIngreso;
        }
      );

      this.presupuestoService.sumaEgresos.subscribe(
        (sumaEgreso:number) => {

          this.totalEgresos = sumaEgreso;
        }
      );

      this.presupuestoService.porcentajeEgresos.subscribe(
        (porcentaje:number) => {

          this.porcentajeEgresos = porcentaje;
        }
      );
  }

  listaIngresos:Ingresos[] = [];
  listaEgresos:Egresos[] = [];

  totalIngresos:number;
  totalEgresos:number;

  porcentajeEgresos:number;
}
