import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favfilter',
  templateUrl: './favfilter.component.html',
  styleUrls: ['./favfilter.component.scss'],
})
export class FavfilterComponent implements OnInit {
  
  empresaId=sessionStorage.getItem("userId");
  alumnosListaFav:any;
  alumnoFavFiltered:any;

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
    let alumnoFavCollection:AngularFirestoreCollection=this.db.collection<User>('empresa/'+this.empresaId+"/Favoritos/");
    alumnoFavCollection.valueChanges().subscribe(
      res=>{
          this.alumnosListaFav=res;
      }
    )
  }

  onClickFilterAccept(){
     this.alumnoFavFiltered = this.alumnosListaFav;
      //console.log(this.alumnoFavFiltered);

    if(this.filtrarNombre.trim()!=""){
      let filtroNombre = this.filtrarNombre.trim(); 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.nombreyapellidos.toLowerCase().includes(filtroNombre.toLowerCase());
      });    
    }
    if(this.filtrarEdad!=null){
      let filtroEdad = this.filtrarEdad; 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.edad==filtroEdad;
      });    
    }
    if(this.filtrarCurso.trim()!=""){
      let filtroCurso = this.filtrarCurso.trim(); 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.curso.toLowerCase().includes(filtroCurso.toLowerCase());
      });    
    }
    if(this.filtrarFormacion.trim()!=""){
      let filtroFormacion = this.filtrarFormacion.trim(); 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.formacion.toLowerCase().includes(filtroFormacion.toLowerCase());
      });    
    }
    if(this.filtrarIdiomas.trim()!=""){
      let filtroidiomas = this.filtrarIdiomas.trim(); 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.idiomas.toLowerCase().includes(filtroidiomas.toLowerCase());
      });    
    }
    if(this.filtrarNivelIdiomas.trim()!=""){
      let filtroNivelIdiomas = this.filtrarNivelIdiomas.trim(); 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        if(item.userInfo.nivel==filtroNivelIdiomas){
        return item.userInfo.nivel;
        }
      });    
    }
    if(this.filtrarDatos.trim()!=""){
      let filtroDatos = this.filtrarDatos.trim(); 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.datos.toLowerCase().includes(filtroDatos.toLowerCase());
      });    
    }
    if(this.filtrarExperiencia==true){
      let filtroExperiencia = this.filtrarExperiencia; 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.experiencia==filtroExperiencia;
      });    
    }
    if(this.filtrarSinExperiencia==true){
      let filtroSinExperiencia = false; 
      this.alumnoFavFiltered = this.alumnoFavFiltered.filter(function(item:any){
        return item.userInfo.experiencia==filtroSinExperiencia;
      });    
    }
    if(this.filtrarSinExperiencia==true && this.filtrarExperiencia==true){
      this.modalController.dismiss(this.alumnosListaFav);
    }

    //console.log(this.alumnoFavFiltered);

    this.router.navigateByUrl('favoritos');

    this.modalController.dismiss(this.alumnoFavFiltered);
  }

  onClickClose(){
    this.modalController.dismiss(this.alumnosListaFav);
  }

}
