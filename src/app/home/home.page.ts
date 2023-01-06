import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  contrasena: string ='';
  educacion: string ='';
  fNacimeinto: string='';

  constructor(
    private router: ActivatedRoute
  ) {}
  ngOnInit(){
    this.router.queryParams.subscribe(parametros=>{
      this.usuario=parametros['usuario'];
      this.nombre=parametros['nombre'];
      this.apellido=parametros['apellido'];
      this.educacion=parametros['educacion'];
    })
  }
}
