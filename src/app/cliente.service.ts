import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AlertaService } from './alerta.service';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient, private alertaService: AlertaService) { }

  obtenerTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URL).pipe(
      tap(() => this.log('Se han recibido los clientes'))
    );
  }

  obtenerPorId(id: number): Observable<Cliente | undefined> {
    this.log('obtenerPorId');
    
    return this.http.get<Cliente>(this.URL + id).pipe(
      tap(cliente => {
        console.log({...cliente, fechaNacimiento: new Date(cliente.fechaNacimiento)});
        return {...cliente, fechaNacimiento: new Date(cliente.fechaNacimiento)};
      })
    );
  }

  insertar(cliente: Cliente): Observable<Cliente> {
    this.log('insertar');
    
    return this.http.post<Cliente>(this.URL, cliente);
  }

  modificar(cliente: Cliente): Observable<Cliente> {
    this.log('modificar');

    return this.http.put<Cliente>(this.URL + cliente.id, cliente);
  }

  borrar(id: number): Observable<any> {
    this.log('borrar');

    return this.http.delete(this.URL + id);
  }

  log(mensaje: string){
    console.log(mensaje);

    this.alertaService.agregar({ mensaje, nivel: 'success' });
  }
}
