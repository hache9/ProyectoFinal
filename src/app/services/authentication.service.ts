import { Injectable } from '@angular/core';
import { User } from './../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { UserAlumno } from '../models/userAlumno.interface';

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

  userAlumno:UserAlumno={
    id:"",
    mail:"",
    password:"",
    nombreyapellidos:"",
    edad:"",
    curso:"",
    idiomas:"",
    datos:"",
    admin:false,
    empresa:false
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

  async createUserEmpresa(mail:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.user.mail=mail;
        this.user.password=password;
        this.user.admin=false;
        this.user.empresa=true;
        this.userService.userEmpresa(this.user);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async createUserAlumno(mail:string, password:string, nombreyapellidos:string, edad:string, curso:string, idiomas:string, datos:string ){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.userAlumno.mail=mail;
        this.userAlumno.password=password;
        this.userAlumno.nombreyapellidos=nombreyapellidos;
        this.userAlumno.edad=edad;
        this.userAlumno.curso=curso;
        this.userAlumno.idiomas=idiomas;
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
