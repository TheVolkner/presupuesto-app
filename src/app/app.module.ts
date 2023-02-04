import { PresupuestoService } from './presupuesto.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [PresupuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
