import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";

interface Verificacion {
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
    TableModule,
    Button
  ],
  templateUrl: './tabla-verifica-comprobante.component.html',
  styleUrl: './tabla-verifica-comprobante.component.scss'
})
export class TablaVerificaComprobanteComponent implements OnInit {
  verificaciones: any[] = [];

  ngOnInit() {
    this.verificaciones = [
      {id: 1, fecha: '2022-01-01', tipo: 'Tipo 1', estado: 'Estado 1', monto: 100},
      {id: 2, fecha: '2022-02-01', tipo: 'Tipo 2', estado: 'Estado 2', monto: 200},
      {id: 3, fecha: '2022-03-01', tipo: 'Tipo 3', estado: 'Estado 3', monto: 300},
      {id: 4, fecha: '2022-04-01', tipo: 'Tipo 4', estado: 'Estado 4', monto: 400},
      {id: 5, fecha: '2022-05-01', tipo: 'Tipo 5', estado: 'Estado 5', monto: 500},
      {id: 6, fecha: '2022-06-01', tipo: 'Tipo 6', estado: 'Estado 6', monto: 600},
      {id: 7, fecha: '2022-07-01', tipo: 'Tipo 7', estado: 'Estado 7', monto: 700},
      {id: 8, fecha: '2022-08-01', tipo: 'Tipo 8', estado: 'Estado 8', monto: 800},
      {id: 9, fecha: '2022-09-01', tipo: 'Tipo 9', estado: 'Estado 9', monto: 900},
      {id: 10, fecha: '2022-10-01', tipo: 'Tipo 10', estado: 'Estado 10', monto: 1000}
    ];
  }

  onAccept(verificacion: any) {
    // Implementa la lógica para aceptar una verificación aquí
  }

  onReject(verificacion: any) {
    // Implementa la lógica para rechazar una verificación aquí
  }
}
