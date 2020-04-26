import { Component, OnInit } from '@angular/core';
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
  filtrarEdad:string="";
  filtrarCurso:string="";
  filtrarIdiomas:string="";

  constructor(private db:AngularFirestore,
    private router:Router,
    private modalController:ModalController) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("userId"));
    let alumnoCollection:AngularFirestoreCollection=this.db.collection<User>("alumno");
    alumnoCollection.valueChanges().subscribe(res=>{
      this.alumnos=res;
      console.log(res);
    })
  }

  onClickFilterAccept(){
    this.alumnoFiltered = this.alumnos;
    console.log(this.alumnoFiltered);

    if(this.filtrarNombre.trim()!=""){
      let filtroNombre = this.filtrarNombre.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.nombreyapellidos.toLowerCase().includes(filtroNombre.toLowerCase());
      });    
    }
    if(this.filtrarEdad.trim()!=""){
      let filtroEdad = this.filtrarEdad.trim(); 
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
    if(this.filtrarIdiomas.trim()!=""){
      let filtroidiomas = this.filtrarIdiomas.trim(); 
      this.alumnoFiltered = this.alumnoFiltered.filter(function(item:any){
        return item.userInfo.idiomas.toLowerCase().includes(filtroidiomas.toLowerCase());
      });    
    }

    console.log(this.alumnoFiltered);

    this.router.navigateByUrl('principalempresa');

    this.modalController.dismiss(this.alumnoFiltered);
  }

  onClickClose(){
    this.modalController.dismiss(this.alumnos);
  }

}
