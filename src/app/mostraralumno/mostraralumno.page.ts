import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';



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
  alumnoEdad:number;
  alumnoCurso:string;
  alumnoFormacion:string;
  alumnoExperiencia:string;
  alumnoIdiomas:string;
  alumnoNivel:string;
  alumnoDatos:string;

  expBool:boolean;


  constructor(private routeParams:ActivatedRoute,
    private EmailComposer:EmailComposer) {
    this.routeParams.params.subscribe(params =>{
      this.userAlumno=JSON.parse(params['userAlumno']);
      console.log(this.userAlumno);
      console.log(params);
      this.alumnoImagen=this.userAlumno.imagen;
      this.alumnoMail=this.userAlumno.mail;
      this.alumnoNombre=this.userAlumno.nombreyapellidos;
      this.alumnoEdad=this.userAlumno.edad;
      this.alumnoCurso=this.userAlumno.curso;
      this.alumnoFormacion=this.userAlumno.formacion;
      this.expBool=this.userAlumno.experiencia;
      this.alumnoExperiencia=this.userAlumno.tiempoexp;
      this.alumnoIdiomas=this.userAlumno.idiomas;
      this.alumnoNivel=this.userAlumno.nivel;
      this.alumnoDatos=this.userAlumno.datos;
    })
   }

  ngOnInit() {
  }

  onClickEmail(){
    console.log(this.EmailComposer);
    this.EmailComposer.open({
      to: this.alumnoMail,
    })
  }

}
