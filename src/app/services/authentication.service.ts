import { Injectable } from '@angular/core';
import { User } from './../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private afAuth:AngularFireAuth,
    private db:AngularFirestore
    ) { }

  async createUserAdmin(mail:string, password:string, admin:boolean, empresa:boolean){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.user.mail=mail;
        this.user.password=password;
        this.user.admin=admin;
        this.user.empresa=empresa;
        this.createUser(this.user);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async createUserEmpresa(mail:string, password:string, admin:boolean, empresa:boolean){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.user.mail=mail;
        this.user.password=password;
        this.user.admin=admin;
        this.user.empresa=empresa;
        this.createUser(this.user);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  async createUserAlumno(mail:string, password:string, admin:boolean, empresa:boolean){
    return this.afAuth.auth.createUserWithEmailAndPassword(mail,password)
      .then((newCredential:firebase.auth.UserCredential) => {
        //para que funcione firestore
        this.user.mail=mail;
        this.user.password=password;
        this.user.admin=admin;
        this.user.empresa=empresa;
        this.createUser(this.user);
        console.log(newCredential);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  //Se crea una funcion para meter usuario en firestore.
  async createUser(userInfo:User){
    userInfo.id=this.db.createId();
    this.db.doc("users/" + userInfo.id).set({userInfo});
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
