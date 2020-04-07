import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private service:AuthenticationService,
    private router:Router) { }

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

      if(this.checkAdmin==true && this.checkEmpresa==false || this.checkAdmin==true && this.checkEmpresa==true){
        console.log(this.checkAdmin);
        this.service.createUserAdmin(this.user, this.pass, this.checkAdmin, this.checkEmpresa).then(() => {
          console.log("Usuario Admin creado correctamente");
          
        }, error => {
          console.log(error);
        });
      }
      if(this.checkEmpresa==true && this.checkAdmin==false){
        console.log(this.checkEmpresa);
        this.service.createUserEmpresa(this.user, this.pass, this.checkAdmin, this.checkEmpresa).then(() => {
          console.log("Usuario Empresa creado correctamente");
          
        }, error => {
          console.log(error);
        });
      }
      if(this.checkEmpresa==false && this.checkAdmin==false){
        console.log(this.checkEmpresa);
        this.service.createUserAlumno(this.user, this.pass, this.checkAdmin, this.checkEmpresa).then(() => {
          console.log("Usuario creado correctamente");
          
        }, error => {
          console.log(error);
        });

        this.user="";
        this.pass="";
        this.checkEmpresa==false;
        this.checkAdmin==false;
        this.router.navigateByUrl('/home');

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
