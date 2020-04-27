import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.page.html',
  styleUrls: ['./editaralumno.page.scss'],
})
export class EditaralumnoPage implements OnInit {

  tipopass:string="password";

  alumno:UserAlumno;
  userEdited:UserAlumno;
  
  alumnoImagen:string;
  textNombre:string;
  textEdad:string;
  textCurso:string;
  textIdiomas:string;
  textDatos:string;

  nombreVacio:string="";
  edadVacia:string="";
  cursoVacio:string="";
  idiomasVacio:string="";
  datosVacio:string="";

  constructor(private routeParams:ActivatedRoute,
    private router:Router,
    private toastService:ToastService,
    private userService:UserService) {
    this.routeParams.params.subscribe(params =>{
      this.alumno=JSON.parse(params['restaurant']);
      console.log(this.alumno);
      this.alumnoImagen=this.alumno.imagen;
      this.textNombre=this.alumno.nombreyapellidos;
      this.textEdad=this.alumno.edad;
      this.textCurso=this.alumno.curso;
      this.textIdiomas=this.alumno.idiomas;
      this.textDatos=this.alumno.datos;
    });
   }

  ngOnInit() {
  }

  onClickEditAlumno(){
    if(this.textNombre.trim()==""){
      this.nombreVacio="Por favor, introduce tu nombre y apellidos.";  
    }else{
      this.nombreVacio="";  
    }
    if(this.textEdad==null){
      this.edadVacia="Por favor, introduce tu edad.";  
    }else{
      this.edadVacia="";  
    }
    if(this.textCurso.trim()==""){
      this.cursoVacio="Por favor, introduce tu curso.";  
    }else{
      this.cursoVacio="";  
    }if(this.textIdiomas.trim()==""){
      this.idiomasVacio="Por favor, introduce tu nivel de idioma.";  
    }else{
      this.idiomasVacio="";  
    }
    if(this.textDatos.trim()==""){
      this.datosVacio="Por favor, introduce tus datos.";  
    }else{
      this.datosVacio="";  
    }
    if(this.textNombre.trim()!="" && this.textEdad!="" && this.textCurso.trim()!="" && this.textIdiomas.trim()!="" && this.textDatos.trim()!=""){
      this.userEdited={
        id:this.alumno.id,
        mail:this.alumno.mail,
        password:this.alumno.password,
        imagen:this.alumnoImagen,
        nombreyapellidos:this.textNombre,
        edad:this.textEdad,
        curso:this.textCurso,
        idiomas:this.textIdiomas,
        datos:this.textDatos,
        admin:false,
        empresa:false
      }      
      this.userService.editUserAlumno(this.alumno.id, this.userEdited).then(() => {
        console.log("Usuario editado correctamente");
        //Toast generado en servicio
        this.toastService.presentToast("Usuario editado correctamente");
        //this.user="";
        //this.pass="";
        //this.router.navigateByUrl('/home');
      }, error => {
        console.log(error);
        //Toast generado en servicio
        this.toastService.presentToast("Error al crear el Usuario");
        });        
    }
  }

  onClickClose(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    this.router.navigateByUrl('/home');
  }

  onClickEye(){
    if(this.tipopass=="password"){
        this.tipopass="text";
    }else{
        this.tipopass="password"
    }
  }
}
