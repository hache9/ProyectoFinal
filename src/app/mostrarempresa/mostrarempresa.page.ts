import { UserEmpresa } from './../models/userEmpresa.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-mostrarempresa',
  templateUrl: './mostrarempresa.page.html',
  styleUrls: ['./mostrarempresa.page.scss'],
})
export class MostrarempresaPage implements OnInit {

  userEmpresa:UserEmpresa;
  empresaMail:string;
  empresaNombre:string;
  empresaCif:string;
  empresaCalle:string;
  empresaCp:string;
  empresaLocalidad:string;
  empresaTelefono:string;

  constructor(private routeParams:ActivatedRoute,
    private EmailComposer:EmailComposer) { 
    this.routeParams.params.subscribe(params =>{
      this.userEmpresa=JSON.parse(params['userEmpresa']);
      console.log(this.userEmpresa);
      console.log(params);
      this.empresaMail=this.userEmpresa.mail;
      this.empresaNombre=this.userEmpresa.nombre;
      this.empresaCif=this.userEmpresa.cif;
      this.empresaCalle=this.userEmpresa.calle;
      this.empresaCp=this.userEmpresa.cp;
      this.empresaLocalidad=this.userEmpresa.localidad;
      this.empresaTelefono=this.userEmpresa.telefono;
      
    })
  }

  ngOnInit() {
  }

  onClickEmail(){
    console.log(this.EmailComposer);
    this.EmailComposer.open({
      to: this.empresaMail,
    })
  }
}
