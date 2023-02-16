import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertaService } from '../alerta.service';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = { id: 0, nombre: '', dni: '', fechaNacimiento: new Date() };

  constructor(private alertaService: AlertaService, private clienteService: ClienteService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.clienteService.obtenerPorId(id).subscribe(cliente => {
        if(cliente) {
          console.log('formulario', cliente);
          return this.cliente = cliente
        } else {
          return undefined;
        }
      });
    }
  }

  aceptar() {
    this.alertaService.limpiar().subscribe();
    
    console.log(this.cliente);

    if(this.cliente.id) {
      this.clienteService.modificar(this.cliente).subscribe(() => this.location.back());
    } else {
      this.clienteService.insertar(this.cliente).subscribe(() => this.location.back());
    }
  }
}
