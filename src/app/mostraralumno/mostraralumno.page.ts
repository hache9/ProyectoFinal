import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mostraralumno',
  templateUrl: './mostraralumno.page.html',
  styleUrls: ['./mostraralumno.page.scss'],
})
export class MostraralumnoPage implements OnInit {

  userAlumno:UserAlumno;
  alumnoMail:string;
  alumnoImagen:string;
  alumnoNombre:string;
  alumnoEdad:string;
  alumnoCurso:string;
  alumnoIdiomas:string;
  alumnoDatos:string;


  constructor(private routeParams:ActivatedRoute) {
    this.routeParams.params.subscribe(params =>{
      this.userAlumno=JSON.parse(params['userAlumno']);
      console.log(this.userAlumno);
      console.log(params);
      this.alumnoImagen=this.userAlumno.imagen;
      this.alumnoMail=this.userAlumno.mail;
      this.alumnoNombre=this.userAlumno.nombreyapellidos;
      this.alumnoEdad=this.userAlumno.edad;
      this.alumnoCurso=this.userAlumno.curso;
      this.alumnoIdiomas=this.userAlumno.idiomas;
      this.alumnoDatos=this.userAlumno.datos;
      
    })
   }

  ngOnInit() {
  }

}
