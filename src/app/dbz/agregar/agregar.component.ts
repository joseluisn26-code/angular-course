import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0
  }

  // decorador para utilizar en componente padre se debe llenar tipado de tipo de dato "<T> en este caso es de tipo Personajes"
  // @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();

  constructor( private DbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje ( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
