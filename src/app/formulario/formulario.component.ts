import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  cliente: Cliente = { id: 25, nombre: 'asdf', dni: '1234', fechaNacimiento: new Date() };

  aceptar() {
    console.log(this.cliente);
  }

  cambioFecha(fechaTexto: string) {
    this.cliente.fechaNacimiento = new Date(fechaTexto);
    console.log(this.cliente);
  }
}
