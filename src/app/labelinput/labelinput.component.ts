import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-labelinput',
  templateUrl: './labelinput.component.html',
  styleUrls: ['./labelinput.component.css']
})
export class LabelinputComponent {
  @Input() id!: string;
  @Input() etiqueta!: string;
  @Input() tipo: string = 'text';
  @Input() soloLectura: boolean = false;
  @Input() dato: any;

  @Output() datoChange = new EventEmitter<any>();
}
