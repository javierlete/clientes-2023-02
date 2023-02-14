import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = { id: 0, nombre: '', dni: '', fechaNacimiento: new Date() };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.cliente = CLIENTES.find(cliente => cliente.id === id)!;
  }

  aceptar() {
    console.log(this.cliente);
  }

  cambioFecha(fechaTexto: string) {
    this.cliente.fechaNacimiento = new Date(fechaTexto);
    console.log(this.cliente);
  }
}
