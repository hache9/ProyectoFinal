import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
      if(this.checkAdmin==true){
        console.log(this.checkAdmin);
      }
      if(this.checkEmpresa==true){
        console.log(this.checkEmpresa);
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
