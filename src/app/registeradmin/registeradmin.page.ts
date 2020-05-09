import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.page.html',
  styleUrls: ['./registeradmin.page.scss'],
})
export class RegisteradminPage implements OnInit {

  user:string="";
  pass:string="";
  userfail:string="";
  passfail:string="";
  checkAdmin:boolean=false;
  checkEmpresa:boolean=false;
  tipopass:string="password";
  admin:boolean=false;
  empresa:boolean=false;
  adminPass:string="";
  adminPassVerify:string="123456";
  

  constructor(private service:AuthenticationService,
    private router:Router,
    private toastService:ToastService) { }

  ngOnInit() {
  }

  setAdmin(){
    this.checkAdmin=!this.checkAdmin;
  }

  onClickSaveRegister(){
    if(this.user.trim()==""){
      this.userfail="Por favor, introduce un e-mail válido.";
    }else{
      this.userfail="";
    }
    if(this.pass.trim()==""){
      this.passfail="Por favor, introduce una contraseña.";
    }else{
      this.passfail="";
    }
    if(this.user.trim()!="" && this.pass.trim()!=""){
      console.log(this.user);
      console.log(this.pass);
      
      if(this.checkAdmin==true && this.adminPass.trim()==""){
        //Toast generado en servicio
        this.toastService.presentToast("Contraseña administrador vacía.");
      }else{
        if(this.checkAdmin==true && this.adminPass==this.adminPassVerify){
          console.log(this.checkAdmin);
          this.service.createUserAdmin(this.user.toLowerCase(), this.pass, this.checkAdmin, this.checkEmpresa).then(() => {
            console.log("Usuario Admin creado correctamente");
            //Toast generado en servicio
            this.toastService.presentToast("Usuario Administrador creado correctamente");
            this.user="";
            this.pass="";
            this.checkAdmin==false;
            this.router.navigateByUrl('/home');

          }, error => {
            console.log(error);
            //Toast generado en servicio
            this.toastService.presentToast("Introduce un formato de email correcto");
          });
        }else if(this.checkAdmin==true && this.adminPass!=this.adminPassVerify){
          //Toast generado en servicio
          this.toastService.presentToast("Contraseña de Administrador Incorrecta");
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
