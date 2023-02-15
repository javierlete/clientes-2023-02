import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alerta } from './alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  private alertas: Alerta[] = [];

  obtenerTodas(): Observable<Alerta[]> {
    console.log(this.alertas);
    return of([...this.alertas]);
  }

  agregar(alerta: Alerta): Observable<any> {
    this.alertas.push(alerta);
    return of({})
  }

  limpiar(): Observable<any> {
    this.alertas = [];
    return of({});
  }
}
