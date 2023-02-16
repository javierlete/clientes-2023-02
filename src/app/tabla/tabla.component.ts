import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() etiquetas!: string[];
  @Input() filas!: any[];
  @Input() rutaFormulario!: string;
  @Input() rutaListado!: string;
  
  @Output() onAnadir = new EventEmitter();
  @Output() onEditar = new EventEmitter<number>();
  @Output() onBorrar = new EventEmitter<number>();

  anadir() {
    this.onAnadir.emit();
  }

  editar(id: number) {
    this.onEditar.emit(id);
  }

  borrar(id: number) {
    this.onBorrar.emit(id);
  }
}
