import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFirestore) { }

  
  //Se crea una funcion para meter usuario en firestore.
  async userAdmin(userInfo:User){
    userInfo.id=this.db.createId();
    this.db.doc("admin/" + userInfo.id).set({userInfo});
  }

  //Se crea una funcion para meter usuario en firestore.
  async userEmpresa(userInfo:User){
    userInfo.id=this.db.createId();
    console.log(userInfo.admin);
    this.db.doc("empresa/" + userInfo.id).set({userInfo});
  }

  //Se crea una funcion para meter usuario en firestore.
  async userAlumno(userInfo:User){
    userInfo.id=this.db.createId();
    this.db.doc("alumno/" + userInfo.id).set({userInfo});
  }
}
