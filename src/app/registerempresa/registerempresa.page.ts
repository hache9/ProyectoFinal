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
  admin:boolean=false;
  empresa:boolean=false;
  empresaPass:string="";
  empresaPassVerify:string="123456";


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
      if(this.checkEmpresa==false && this.empresaPass.trim()==""){
        //Toast generado en servicio
        this.toastService.presentToast("Error imposible crear usuario Empresa");
      }else{

        if(this.checkEmpresa==true && this.empresaPass==this.empresaPassVerify){
          console.log(this.checkEmpresa);
          console.log(this.checkAdmin);
          this.service.createUserEmpresa(this.user, this.pass).then(() => {
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
