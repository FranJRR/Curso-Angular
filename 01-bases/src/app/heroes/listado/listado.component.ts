import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes: string[] = [
    'Capitan America',
    'Ironman',
    'Thor',
    'Hulk',
    'Loki',
    'Hawkeye',
  ];

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
