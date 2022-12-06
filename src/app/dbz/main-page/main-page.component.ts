import { Component } from '@angular/core';
import { ListadoComponent } from '../../heroes/listado/listado.component';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  nuevo: Personajes = {
    nombre: 'Maestro Roschi',
    poder: 30000
  }

  // injeccion de dependencias
  constructor ( private DbzService: DbzService ) {
  }

}
