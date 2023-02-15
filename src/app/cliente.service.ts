import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Cliente[]> {
    this.log('obtenerTodos');
    
    return this.http.get<Cliente[]>(this.URL);
  }

  obtenerPorId(id: number): Observable<Cliente | undefined> {
    this.log('obtenerPorId');
    
    return this.http.get<Cliente>(this.URL + id);
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
  }
}
