import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  alumnos:any;
  alumnoFiltered:any;

  filtrarNombre:string="";
  filtrarEdad:number;
  filtrarCurso:string="";
  filtrarFormacion:string="";
  filtrarIdiomas:string="";
  filtrarNivelIdiomas:string="";
  filtrarDatos:string="";
  filtrarExperiencia:boolean;
  filtrarSinExperiencia:boolean;

  constructor(private db:AngularFirestore,
    private router:Router,
    private modalController:ModalController) { }

  ngOnInit() {
    //console.log(sessionStorage.getItem("userId"));
    let alumnoCollection:AngularFirestoreCollection=this.db.collection<User>("alumno");
    alumnoCollection.valueChanges().subscribe(res=>{
      this.alumnos=res;
      //console.log(res);
    })
  }

  onClickFilterAccept(){
    this.alumnoFiltered = this.alumnos;
    //console.log(this.alumnoFiltered);

    if(this.filtrarNombre.trim()!=""){
      let filtroNombre = this.filtrarNombre.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.nombreyapellidos.toLowerCase().includes(filtroNombre.toLowerCase());
      });    
    }
    if(this.filtrarEdad!=null){
      let filtroEdad = this.filtrarEdad; 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.edad==filtroEdad;
      });    
    }
    if(this.filtrarCurso.trim()!=""){
      let filtroCurso = this.filtrarCurso.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.curso.toLowerCase().includes(filtroCurso.toLowerCase());
      });    
    }
    if(this.filtrarFormacion.trim()!=""){
      let filtroFormacion = this.filtrarFormacion.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.formacion.toLowerCase().includes(filtroFormacion.toLowerCase());
      });    
    }
    if(this.filtrarIdiomas.trim()!=""){
      let filtroidiomas = this.filtrarIdiomas.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.idiomas.toLowerCase().includes(filtroidiomas.toLowerCase());
      });    
    }
    if(this.filtrarNivelIdiomas.trim()!=""){
      let filtroNivelIdiomas = this.filtrarNivelIdiomas.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        if(item.userInfo.nivel==filtroNivelIdiomas){
        return item.userInfo.nivel;
        }
      });    
    }
    if(this.filtrarDatos.trim()!=""){
      let filtroDatos = this.filtrarDatos.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.datos.toLowerCase().includes(filtroDatos.toLowerCase());
      });    
    }
    if(this.filtrarExperiencia==true){
      let filtroExperiencia = this.filtrarExperiencia; 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.experiencia==filtroExperiencia;
      });    
    }
    if(this.filtrarSinExperiencia==true){
      let filtroSinExperiencia = false; 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.experiencia==filtroSinExperiencia;
      });    
    }
    if(this.filtrarSinExperiencia==true && this.filtrarExperiencia==true){
      this.modalController.dismiss(this.alumnos);
    }
   

    //console.log(this.alumnoFiltered);

    this.router.navigateByUrl('principalempresa');

    this.modalController.dismiss(this.alumnoFiltered);
  }

  onClickClose(){
    this.modalController.dismiss(this.alumnos);
  }

}
