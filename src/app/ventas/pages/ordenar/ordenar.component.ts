import { Component } from '@angular/core';
import { Heroe, Color} from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayuscalas : boolean = false ;
  ordenarPor : string = 'sin valor';

  heroes : Heroe[] = [
    {
      nombre : 'Superman',
      vuela  : true,
      color : Color.azul
    },
    {
      nombre : 'Batman',
      vuela  : false,
      color : Color.negro
    },
    {
      nombre : 'Robin',
      vuela  : false,
      color : Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela  : false,
      color : Color.rojo
    },
    {
      nombre : 'Linterna Verde',
      vuela  : true,
      color : Color.rojo
    }
  ]


  cambiarMayusculas  ()   {
    this.enMayuscalas = !this.enMayuscalas;
  }

  ordenar ( valor: string ) :string{
    return this.ordenarPor = valor ;
  }




}
