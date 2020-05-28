import { UserEmpresa } from './../models/userEmpresa.interface';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filterempresasadmin',
  templateUrl: './filterempresasadmin.component.html',
  styleUrls: ['./filterempresasadmin.component.scss'],
})
export class FilterempresasadminComponent implements OnInit {

  empresas:any;
  empresaFiltered:any;
  
  filtrarEmail:string="";
  filtrarNombre:string="";
  filtrarLocalidad:string="";
  filtrarTelefono:string="";


  constructor(private db:AngularFirestore,
    private router:Router,
    private modalController:ModalController) { }

  ngOnInit() {
    //console.log(sessionStorage.getItem("userId"));
    let alumnoCollection:AngularFirestoreCollection=this.db.collection<UserEmpresa>("empresa");
    alumnoCollection.valueChanges().subscribe(res=>{
      this.empresas=res;
      //console.log(res);
    })
  }

  onClickFilterAccept(){
    this.empresaFiltered = this.empresas;
    //console.log(this.empresaFiltered);

    if(this.filtrarEmail.trim()!=""){
      let filtroEmail = this.filtrarEmail.trim(); 
      this.empresaFiltered = this.empresaFiltered.filter(function(item:any){
        return item.userInfo.mail.toLowerCase().includes(filtroEmail.toLowerCase());
      });    
    }
    if(this.filtrarNombre.trim()!=""){
      let filtroNombre = this.filtrarNombre.trim(); 
      this.empresaFiltered = this.empresaFiltered.filter(function(item:any){
        return item.userInfo.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
      });    
    }
    if(this.filtrarLocalidad.trim()!=""){
      let filtroLocalidad = this.filtrarLocalidad.trim();; 
      this.empresaFiltered = this.empresaFiltered.filter(function(item:any){
        return item.userInfo.localidad.toLowerCase().includes(filtroLocalidad.toLowerCase());
      });    
    }
    if(this.filtrarTelefono.trim()!=""){
      let filtroTelefono = this.filtrarTelefono.trim(); 
      this.empresaFiltered = this.empresaFiltered.filter(function(item:any){
        if(item.userInfo.telefono==filtroTelefono){
        return item.userInfo.telefono;
        }
      });    
    }
   

    //console.log(this.empresaFiltered);

    this.router.navigateByUrl('mostrarempresasadmin');

    this.modalController.dismiss(this.empresaFiltered);
  }

  onClickClose(){
    this.modalController.dismiss(this.empresas);
  }

}
