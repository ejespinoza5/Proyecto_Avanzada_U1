import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormAdopcionComponent } from './Componentes/form-adopcion/form-adopcion.component';
import {
  TablaVerificaComprobanteComponent
} from "./Componentes/tabla-verifica-comprobante/tabla-verifica-comprobante.component";
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormAdopcionComponent, TablaVerificaComprobanteComponent, TabViewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProyectoU1';
}
