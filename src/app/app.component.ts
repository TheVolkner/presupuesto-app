import { Egresos } from './egresos/egresos.model';
import { Ingresos } from './ingresos/ingresos.model';
import { PresupuestoService } from './presupuesto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private presupuestoService:PresupuestoService){}

  //CREAMOS LOS ARREGLOS DE INGRESOS Y EGRESOS CON LOS QUE LLENAREMOS LOS CAMPOS DE LOS COMPONENTES RESPECTIVOS
  public ingresos:Ingresos[] = [new Ingresos("Salario Taller",200),new Ingresos("Venta PC",500),new Ingresos("Loteria",900)];
  public egresos:Egresos[] = [new Egresos("Compra Moto",500,0),new Egresos("Gastos Casa",50,0)];

  //CREAMOS LOS TOTALES
  public ingresosTotales:number;
  public egresosTotales:number;

  //GENERAMOS EL PORCENTAJE DE EGRESOS CON RESPECTO A LOS INGRESOS
  public porcentajeEgresos:number;

  //AL INICIALIZAR LA APLICACION, SE MANDA A LEER LOS VALORES DE CADA INGRESO/EGRESO
  //Y LOS VALORES TOTALES DESDE EL SERVICIO.
  //ESTO SERA PROCESADO EN EL COMPONENTE HEADER
  ngOnInit(): void {

     this.cargarRegistros();
  }

  cargarRegistros():void{

    console.log("Inicializando metodos de servicio");
    //CON EL SERVICIO GENERAMOS LOS TOTALES DE INGRESOS Y EGRESOS Y GENERAMOS PORCENTAJE
    this.ingresosTotales = this.presupuestoService.totalIngresos(this.ingresos);
    this.egresosTotales = this.presupuestoService.totalEgresos(this.egresos);
  

    //EMITIMOS LOS LISTADOS DE INGRESOS/EGRESOS Y LOS TOTALES AL COMPONENTE HEADER
    this.presupuestoService.listadoEgresos.emit(this.egresos);
    this.presupuestoService.listadoIngresos.emit(this.ingresos);
    this.presupuestoService.sumaIngresos.emit(this.ingresosTotales);
    this.presupuestoService.sumaEgresos.emit(this.egresosTotales);
    this.presupuestoService.porcentajeEgresos.emit(this.porcentajeEgresos);

  }

  //AGREGAMOS UN INGRESO ENVIANDOLO AL SERVICE PARA SER LISTADO
  registrarIngreso(ingreso:Ingresos){

      this.ingresos = this.presupuestoService.agregarIngreso(ingreso,this.ingresos);
      this.cargarRegistros();
  }

  //AGREGAMOS UN EGRESO ENVIANDOLO AL SERVICE PARA SER LISTADO
  registrarEgreso(egreso:Egresos){

     this.egresos = this.presupuestoService.agregarEgreso(egreso,this.egresos);
     this.cargarRegistros();
  }


   //ELIMINAMOS UN INGRESO ENVIANDOLO JUNTO CON EL LISTADO AL SERVICE
  eliminarIngreso(ingreso:Ingresos):void{

    this.ingresos = this.presupuestoService.eliminarIngreso(ingreso,this.ingresos);
    this.cargarRegistros();
  }

   //ELIMINAMOS UN EGRESO ENVIANDOLO JUNTO CON EL LISTADO AL SERVICE
  eliminarEgreso(egreso:Egresos):void{

    this.egresos = this.presupuestoService.eliminarEgreso(egreso,this.egresos);
    this.cargarRegistros();
  }

}
