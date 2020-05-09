import { Injectable } from '@angular/core';
import { User } from './../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { UserAlumno } from '../models/userAlumno.interface';
import { UserEmpresa } from '../models/userEmpresa.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //se crea objeto vacio para que funcione Firestore
  user:User={
    id:"",
    mail:"",
    password:"",
    admin:false,
    empresa:false
  }

  userEmpresa:UserEmpresa={
    id:"",
    mail:"",
    password:"",
    admin:false,
    empresa:true,
    nombre:"",
    cif:"",
    calle:"",
    cp:"",
    localidad:"",
    telefono:"",
}

  userAlumno:UserAlumno={
    id:"",
    mail:"",
    password:"",
    imagen:"",
    nombreyapellidos:"",
    edad:null,
    curso:"",
    formacion:"",
    experiencia:false,
    tiempoexp:"",
    idiomas:"",
    nivel:"",
    datos:"",
    admin:false,
    empresa:false,
}

  constructor(private afAuth:AngularFireAuth,
    private db:AngularFirestore,
    private userService:UserService
    ) { }

  async createUserAdmin(mail:string, password:string, admin:boolean, empresa:boolean){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.user.mail=mail;
        this.user.password=password;
        this.user.admin=admin;
        this.user.empresa=empresa;
        this.userService.userAdmin(this.user);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async createUserEmpresa(mail:string, password:string, nuevoNombreEmpresa:string, nuevoCif:string, nuevaCalle:string, nuevoCp:string, nuevaLocalidad:string,  nuevoTelefono:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.userEmpresa.mail=mail;
        this.userEmpresa.password=password;
        this.userEmpresa.admin=false;
        this.userEmpresa.empresa=true;
        this.userEmpresa.nombre=nuevoNombreEmpresa;
        this.userEmpresa.cif=nuevoCif;
        this.userEmpresa.calle=nuevaCalle;
        this.userEmpresa.cp=nuevoCp;
        this.userEmpresa.localidad=nuevaLocalidad;
        this.userEmpresa.telefono=nuevoTelefono;
        this.userService.userEmpresa(this.userEmpresa);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async createUserAlumno(mail:string, password:string, imagen:string, nombreyapellidos:string, edad:number, curso:string, formacion:string, experiencia:boolean, tiempo:string, idiomas:string, nivel:string, datos:string ){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        console.log(experiencia);
        //para que funcione firestore
        this.userAlumno.mail=mail;
        this.userAlumno.password=password;
        this.userAlumno.nombreyapellidos=nombreyapellidos;
        this.userAlumno.imagen=imagen;
        this.userAlumno.edad=edad;
        this.userAlumno.curso=curso;
        this.userAlumno.formacion=formacion;
        this.userAlumno.experiencia=experiencia;
        this.userAlumno.tiempoexp=tiempo;
        this.userAlumno.idiomas=idiomas;
        this.userAlumno.nivel=nivel;
        this.userAlumno.datos=datos;
        this.userAlumno.admin=false;
        this.userAlumno.empresa=false;
        this.userService.userAlumno(this.userAlumno);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async loginUser(mail:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async forgotUser(mail:string){
    return this.afAuth.auth.sendPasswordResetEmail(mail)
      .then(() => {
        console.log(mail);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }
}
