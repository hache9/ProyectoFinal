import { Component, OnInit } from '@angular/core';
import { UserAlumno } from '../models/userAlumno.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principalalumno',
  templateUrl: './principalalumno.page.html',
  styleUrls: ['./principalalumno.page.scss'],
})
export class PrincipalalumnoPage implements OnInit {
  userAlumno:UserAlumno;
  alumnoMail:string;
  alumnoImagen:string;
  alumnoNombre:string;
  alumnoEdad:string;
  alumnoCurso:string;
  alumnoIdiomas:string;
  alumnoDatos:string;


  constructor(private routeParams:ActivatedRoute,
    private router:Router) {
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

  onClickEditar(userAlumno:UserAlumno){
    console.log(userAlumno)
    this.router.navigate(['editaralumno', {userAlumno: JSON.stringify(userAlumno)}]);
  }

  onClickClose(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    this.router.navigateByUrl('/home');
  }
}
