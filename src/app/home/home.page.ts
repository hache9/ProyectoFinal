import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:string="";
  pass:string="";
  userfail:string="";
  passfail:string="";
  forgot:string="Forgot Pass"

  constructor(private router:Router) {
    }

    async onClickLogin(){
      console.log(this.user);
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
      if(this.user.trim()!=="" && this.pass.trim()!==""){
        console.log(this.user+" "+this.pass);
      }
    }

    async goRegister(){
      this.router.navigateByUrl('/register');
    }
}
