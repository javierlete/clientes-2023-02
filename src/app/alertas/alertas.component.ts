import { Component } from '@angular/core';
import { Alerta } from '../alerta';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
  alertas: Alerta[] = [ 
    { mensaje: 'Bien', nivel: 'success' },
    { mensaje: 'Mal', nivel: 'danger' }
  ];
}
