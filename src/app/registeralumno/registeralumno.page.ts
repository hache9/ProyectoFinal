import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { ModalController } from '@ionic/angular';
import { GaleryComponent } from '../galery/galery.component';

@Component({
  selector: 'app-registeralumno',
  templateUrl: './registeralumno.page.html',
  styleUrls: ['./registeralumno.page.scss'],
})
export class RegisteralumnoPage implements OnInit {

  user:string="";
  pass:string="";
  userfail:string="";
  passfail:string="";
  checkAdmin:boolean=false;
  checkEmpresa:boolean=false;
  tipopass:string="password";

  nuevaImagen:string="../../assets/img/noimage.png";
  nuevoNombre:string="";
  nuevaEdad:string="";
  nuevoCurso:string="";
  nuevosIdiomas:string="";
  nuevosDatos:string="";

  nombreVacio:string="";
  edadVacia:string="";
  cursoVacio:string="";
  idiomasVacio:string="";
  datosVacio:string="";

  constructor(private service:AuthenticationService,
    private router:Router,
    private toastService:ToastService,
    private modalController:ModalController) { }

  ngOnInit() {
  }

  onClickSaveRegister(){
    if(this.user.trim()==""){
      this.userfail="Por favor, introduce email.";
    }else{
      this.userfail="";
    }
    if(this.pass.trim()==""){
      this.passfail="Por favor, introduce contraseña.";
    }else{
      this.passfail="";
    }
    if(this.nuevoNombre.trim()==""){
      this.nombreVacio="Por favor, introduce nombre y apellidos.";  
    }else{
      this.nombreVacio="";  
    }
    if(this.nuevaEdad==""){
      this.edadVacia="Por favor, introduce edad.";  
    }else{
      this.edadVacia="";  
    }
    if(this.nuevoCurso.trim()==""){
      this.cursoVacio="Por favor, introduce curso.";  
    }else{
      this.cursoVacio="";  
    }
    if(this.nuevosIdiomas.trim()==""){
      this.idiomasVacio="Por favor, introduce otros conocimientos.";  
    }else{
      this.idiomasVacio="";  
    }
    if(this.nuevosDatos.trim()==""){
      this.datosVacio="Por favor, introduce datos de interes.";  
    }else{
      this.datosVacio="";  
    }
    if(this.user.trim()!="" && this.pass.trim()!="" && this.nuevoNombre.trim()!="" && this.nuevaEdad!="" && this.nuevoCurso.trim()!="" && this.nuevosIdiomas.trim()!="" && this.nuevosDatos.trim()!=""){
      console.log(this.user);
      console.log(this.pass);
      
        this.service.createUserAlumno(this.user, this.pass, this.nuevoNombre,this.nuevaEdad, this.nuevoCurso, this.nuevosIdiomas, this.nuevosDatos).then(() => {
          console.log("Usuario creado correctamente");
          //Toast generado en servicio
          this.toastService.presentToast("Usuario creado correctamente");
          this.user="";
          this.pass="";
          this.router.navigateByUrl('/home');
        }, error => {
          console.log(error);
          //Toast generado en servicio
          this.toastService.presentToast("Error al crear el Usuario");
          });        
      }
    }
    
  //El ojo, crear tipopass en password y se hace la condicion.(Esta declarado en el html)
  onClickEye(){
    if(this.tipopass=="password"){
        this.tipopass="text";
    }else{
        this.tipopass="password"
    }
  }

  async onClickSelectImage(){
    console.log("Seleccionar imagen");
    const modal = await this.modalController.create({
      component: GaleryComponent,
      cssClass: "gallery-modal",
      componentProps:{
        //'restaurant': JSON.stringify(this.restaurant)
      }
    });
      await modal.present();
      const data=await modal.onDidDismiss();
      //this.newImage=data.data;
  }

}
