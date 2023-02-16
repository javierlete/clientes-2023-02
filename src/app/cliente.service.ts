import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
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
      tap(() => this.log('Se han recibido los clientes')),
      catchError(err => {
        this.error('No se ha podido recibir los clientes');
        throw err;
      })
    );
  }

  obtenerPorId(id: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(this.URL + id).pipe(
      tap(() => this.log('Se ha obtenido el cliente ' + id)),
      catchError(err => {
        this.error('No se ha podido recibir el cliente ' + id);
        throw err;
      })
    );
  }

  insertar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URL + 'aaa', cliente).pipe(
      tap(() => this.log('Se ha insertado un nuevo cliente')),
      catchError(err => {
        this.error('No se ha podido insertar el cliente');
        throw err;
      })
    );
  }

  modificar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.URL + cliente.id, cliente).pipe(
      tap(() => this.log('Se ha modificado el cliente ' + cliente.id)),
      catchError(err => {
        this.error('No se ha podido modificar el cliente');
        throw err;
      })
    );
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(this.URL + id).pipe(
      tap(() => this.log('Se ha borrado el cliente con id ' + id)),
      catchError(err => {
        this.error('No se ha podido borrar el cliente');
        throw err;
      })
    );
  }

  log(mensaje: string){
    console.log(mensaje);

    this.alertaService.agregar({ mensaje, nivel: 'success' });
  }

  error(mensaje: string) {
    console.error(mensaje);

    this.alertaService.agregar({ mensaje, nivel: 'danger'});
  }
}
