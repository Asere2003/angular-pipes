import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  constructor() { }

 
  nombreUpper : string = 'ALBERTO'
  nombreLower : string = 'alberto'
  nombreCompleto : string = 'aLBerto PéREz'

  fecha: Date = new Date();

}
