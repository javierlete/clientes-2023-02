import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private ultimoId = 2;

  private clientes: Cliente[] = CLIENTES;

  constructor() { }

  obtenerTodos(): Observable<Cliente[]> {
    this.log('obtenerTodos');
    
    return of(this.clientes);
  }

  obtenerPorId(id: number): Observable<Cliente | undefined> {
    this.log('obtenerPorId');
    
    return of(this.clientes.find(c => c.id === id));
  }

  insertar(cliente: Cliente): Observable<Cliente> {
    this.log('insertar');
    
    cliente.id = ++this.ultimoId;
    this.clientes.push(cliente);
    return of(cliente);
  }

  modificar(cliente: Cliente): Observable<Cliente> {
    this.log('modificar');

    for(let i: number = 0; i < this.clientes.length; i++) {
      if(this.clientes[i].id === cliente.id) {
        return of(this.clientes[i] = cliente);
      }
    }

    throw "No se ha encontrado el cliente a modificar";
  }

  borrar(id: number): Observable<any> {
    this.log('borrar');

    this.clientes = this.clientes.filter(c => c.id !== id);
    return of({});
  }

  log(mensaje: string){
    console.log(mensaje);
  }
}
