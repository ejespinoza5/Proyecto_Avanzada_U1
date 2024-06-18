import { Component } from '@angular/core';
import {TableModule} from "primeng/table";

interface Verificacion{
  id: number;
  fecha: string;
  tipo: string;
  estado: string;
  monto: number;
}
@Component({
  selector: 'app-tabla-verifica-comprobante',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './tabla-verifica-comprobante.component.html',
  styleUrl: './tabla-verifica-comprobante.component.scss'
})
export class TablaVerificaComprobanteComponent {
  verificaciones: Verificacion[] = [
    // Aquí puedes agregar tus datos de verificación
  ];

  onAccept(verificacion: Verificacion) {
    // Aquí puedes manejar la acción de aceptar
    console.log('Aceptado:', verificacion);
  }

  onReject(verificacion: Verificacion) {
    // Aquí puedes manejar la acción de rechazar
    console.log('Rechazado:', verificacion);
  }
}
