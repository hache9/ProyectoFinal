import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user:string="";
  pass:string="";
  userfail:string="";
  passfail:string="";
  checkAdmin:boolean=false;
  checkEmpresa:boolean=false;
  tipopass:string="password";
  admin:boolean=false;
  adminPass:string="";
  adminPassVerify:string="123456";
  empresa:boolean=false;
  empresaPass:string="";
  empresaPassVerify:string="123456";

  constructor(private service:AuthenticationService,
    private router:Router,
    private toastService:ToastService) { }

  ngOnInit() {
  }
  setAdmin(){
    this.checkAdmin=!this.checkAdmin;
  }
  setEmpresa(){
    this.checkEmpresa=!this.checkEmpresa;
  }

  onClickSaveRegister(){
    if(this.user.trim()==""){
      this.userfail="Please, enter name.";
    }else{
      this.userfail="";
    }
    if(this.pass.trim()==""){
      this.passfail="Please, enter pass.";
    }else{
      this.passfail="";
    }
    if(this.user.trim()!="" && this.pass.trim()!=""){
      console.log(this.user);
      console.log(this.pass);
      if(this.checkAdmin==true && this.adminPass==this.adminPassVerify && this.checkEmpresa==true && this.empresaPass==this.empresaPassVerify){
        //Toast generado en servicio
        this.toastService.presentToast("Error imposible crear Empresa y Admin");
      }else{

        if(this.checkAdmin==true && this.adminPass==this.adminPassVerify){
          console.log(this.checkAdmin);
          this.service.createUserAdmin(this.user, this.pass, this.checkAdmin).then(() => {
            console.log("Usuario Admin creado correctamente");
            //Toast generado en servicio
            this.toastService.presentToast("Usuario Administrador creado correctamente");
          }, error => {
            console.log(error);
            //Toast generado en servicio
            this.toastService.presentToast("Error al crear el Usuario Administrador");
          });
        }else if(this.checkAdmin==true && this.adminPass!=this.adminPassVerify){
          //Toast generado en servicio
          this.toastService.presentToast("Contraseña de Administrador Incorrecta");
        }
        if(this.checkEmpresa==true && this.empresaPass==this.empresaPassVerify){
          console.log(this.checkEmpresa);
          this.service.createUserEmpresa(this.user, this.pass, this.checkAdmin, this.checkEmpresa).then(() => {
            console.log("Usuario Empresa creado correctamente");
            //Toast generado en servicio
            this.toastService.presentToast("Usuario Empresa creado correctamente");
          }, error => {
            console.log(error);
            //Toast generado en servicio
          this.toastService.presentToast("Error al crear el Usuario Empresa");
          });
        }else if(this.checkEmpresa==true && this.empresaPass!=this.empresaPassVerify){
          //Toast generado en servicio
          this.toastService.presentToast("Contraseña de Empresa Incorrecta");
        }
        if(this.checkEmpresa==false && this.checkAdmin==false){
          console.log(this.checkEmpresa);
          this.service.createUserAlumno(this.user, this.pass, this.checkAdmin, this.checkEmpresa).then(() => {
            console.log("Usuario creado correctamente");
            //Toast generado en servicio
            this.toastService.presentToast("Usuario creado correctamente");
          }, error => {
            console.log(error);
            //Toast generado en servicio
            this.toastService.presentToast("Error al crear el Usuario");
          });

          this.user="";
          this.pass="";
          this.checkEmpresa==false;
          this.checkAdmin==false;
          this.router.navigateByUrl('/home');

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
