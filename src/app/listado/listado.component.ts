import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../alerta.service';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(public alertaService: AlertaService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  private cargarClientes() {
    this.clienteService.obtenerTodos().subscribe(clientes => this.clientes = clientes);
  }

  anadir(): void {
    this.alertaService.limpiar().subscribe();
  }

  editar(id: number): void {
    this.alertaService.limpiar().subscribe();
  }

  borrar(id: number): void {
    this.alertaService.limpiar().subscribe();
    this.clienteService.borrar(id).subscribe({next: () => this.cargarClientes()});
  }
}
