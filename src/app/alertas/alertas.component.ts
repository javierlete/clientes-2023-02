import { Component, OnInit } from '@angular/core';
import { Alerta } from '../alerta';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
  constructor(public alertaService: AlertaService) { }
}
