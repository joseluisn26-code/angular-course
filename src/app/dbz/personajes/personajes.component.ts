import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //decorador para recibir de componente padre puedo poner un alias al input y pasarlo desde el componente padre
  // @Input() personajes: Personajes[] = [];
  get personajes() {
    return this.DbzService.personajes;
  }

  constructor( private DbzService: DbzService ) {
   
  }
   
}
