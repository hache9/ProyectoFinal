import { UserEmpresa } from './../models/userEmpresa.interface';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-registerempresa',
  templateUrl: './registerempresa.page.html',
  styleUrls: ['./registerempresa.page.scss'],
})
export class RegisterempresaPage implements OnInit {

  user:string="";
  pass:string="";
  userfail:string="";
  passfail:string="";
  checkAdmin:boolean=false;
  checkEmpresa:boolean=false;
  tipopass:string="password";
  
  empresaPass:string="";
  empresaPassVerify:string="123456";

  nuevoNombreEmpresa:string="";
  nuevoCif:string="";
  nuevaCalle:string="";
  nuevoCp:string="";
  nuevaLocalidad:string="";
  nuevoTelefono:string="";

  nombreVacio:string="";
  cifVacio:string="";
  calleVacia:string="";
  cpVacio:string="";
  localidadVacia:string="";
  telefonoVacio:string="";
  

  userEmpresa:UserEmpresa={
    id:"",
    mail:"",
    password:"",
    admin:false,
    empresa:true,
    nombre:"",
    cif:"",
    calle:"",
    cp:"",
    localidad:"",
    telefono:"",
}

  constructor(private service:AuthenticationService,
    private router:Router,
    private toastService:ToastService) { }

  ngOnInit() {
  }

  setEmpresa(){
    this.checkEmpresa=!this.checkEmpresa;
  }

  onClickSaveRegister(){
    if(this.user.trim()==""){
      this.userfail="Por favor, introduce e-mail.";
    }else{
      this.userfail="";
    }
    if(this.pass.trim()==""){
      this.passfail="Por favor, introduce contraseña.";
    }else{
      this.passfail="";
    }
    if(this.nuevoNombreEmpresa.trim()==""){
      this.nombreVacio="Por favor, introduce nombre.";  
    }else{
      this.nombreVacio="";  
    }
    if(this.nuevoCif.trim()==""){
      this.cifVacio="Por favor, introduce cif.";  
    }else{
      this.cifVacio="";  
    }
    if(this.nuevaCalle.trim()==""){
      this.calleVacia="Por favor, introduce calle.";  
    }else{
      this.calleVacia="";  
    }
    if(this.nuevoCp==""){
      this.cpVacio="Por favor, introduce código póstal.";  
    }else{
      this.cpVacio="";  
    }
    if(this.nuevaLocalidad.trim()==""){
      this.localidadVacia="Por favor, introduce localidad.";  
    }else{
      this.localidadVacia="";  
    }
    if(this.nuevoTelefono.trim()==""){
      this.telefonoVacio="Por favor, introduce datos de telefono.";  
    }else{
      this.telefonoVacio="";  
    }
    if(this.user.trim()!="" && this.pass.trim()!=""){
      console.log(this.user);
      console.log(this.pass);
      if(this.checkEmpresa==false && this.empresaPass.trim()==""){
        //Toast generado en servicio
        this.toastService.presentToast("Error imposible crear usuario Empresa");
      }else{

        if(this.checkEmpresa==true && this.empresaPass==this.empresaPassVerify){
          console.log(this.checkEmpresa);
          console.log(this.checkAdmin);
          this.service.createUserEmpresa(this.user, this.pass, this.nuevoNombreEmpresa, this.nuevoCif, this.nuevaCalle, this.nuevoCp, this.nuevaLocalidad, this.nuevoTelefono).then(() => {
            console.log("Usuario Empresa creado correctamente");
            //Toast generado en servicio
            this.toastService.presentToast("Usuario Empresa creado correctamente");
            this.user="";
            this.pass="";
            this.checkEmpresa==false;
            this.router.navigateByUrl('/home');

          }, error => {
            console.log(error);
            //Toast generado en servicio
            this.toastService.presentToast("Error al crear el Usuario empresa");
          });
        }else if(this.checkEmpresa==true && this.empresaPass!=this.empresaPassVerify){
          //Toast generado en servicio
          this.toastService.presentToast("Contraseña de Empresa Incorrecta");
        }
      }
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


}
