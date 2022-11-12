import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  nombre : string = 'Alberto';
  genero : string = 'masculino';

  
  invitacionMap =  {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }


  clientes: string[] = ['Maria','Pedro','Susana','Alberto','Paula','Martín'];

  clientesMap =  {
    '=0' : 'no tenemos clientes esperando',
    '=1' : 'un cliente esperando',
    'other' : 'tenemos # clientes esperando',
  }

  borrarCliente () : void {
    this.clientes.shift();
  }

  cambiarGenero () : void {
    if(this.nombre == 'Alberto') {
      this.nombre = 'Paula';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Alberto';
      this.genero ='masculino';
    }
    
  }

  persona = {
    nombre: 'Alberto',
    edad  : 42,
    direccion: 'Granada, España'
  }

  heroes = [
    {
      nombre: 'Alberto',
      vuela: true
    },
    {
      nombre: 'Paula',
      vuela: false
    },
    {
      nombre: 'Alberto',
      edad  : 42,
    }
  ]


  // Async Pipe

  miObservable = interval(2000);

  valorPromesas = new Promise(( resolve , reject ) => {
    setTimeout(() =>{
      resolve ( 'Tenemos data de promesa ' );
    },3500 );
  });


}
