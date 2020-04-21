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


  constructor(
    private router:Router) { }

  ngOnInit() {
  }
  
  onClickRegisterAdmin(){
    this.router.navigateByUrl('/registeradmin');
  }

  onClickRegisterEmpresa(){
    this.router.navigateByUrl('/registerempresa');
  }

  onClickRegisterAlumno(){
    this.router.navigateByUrl('/registeralumno');
  }
}
