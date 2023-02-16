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
    return this.http.get<Cliente>(this.URL + id).pipe(
      tap(() => this.log('Se ha obtenido el cliente ' + id))
    );
  }

  insertar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URL, cliente).pipe(
      tap(() => this.log('insertar'))
    );
  }

  modificar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.URL + cliente.id, cliente).pipe(
      tap(() => this.log('Se ha modificado el cliente ' + cliente.id))
    );
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(this.URL + id).pipe(
      tap(() => this.log('Se ha borrado el cliente con id ' + id))
    );
  }

  log(mensaje: string){
    console.log(mensaje);

    this.alertaService.agregar({ mensaje, nivel: 'success' });
  }
}
