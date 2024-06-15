import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormAdopcionComponent } from './Componentes/form-adopcion/form-adopcion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormAdopcionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProyectoU1';
}
