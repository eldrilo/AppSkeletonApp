import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {
  usuarios : Array <any> = [{
    id: 1,
    usuario: 'juan1',
    contrasena: '1234',
    nombre: 'juan',
    apellido: 'herrera',
    educacion: 'basico',
    fNacimiento: '10/05/2000'
  }]


  constructor(
    private router: Router
  ) { }
}
