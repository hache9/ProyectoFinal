import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user.interface';
import { UserAlumno } from '../models/userAlumno.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private db:AngularFirestore,
    private router:Router) { }

  
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
  async userAlumno(userInfo:UserAlumno){
    userInfo.id=this.db.createId();
    this.db.doc("alumno/" + userInfo.id).set({userInfo});
  }

  async userFavorito(userInfo:UserAlumno){
    var userId=sessionStorage.getItem('userId');
    //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('empresa');
    usersCollection.valueChanges().pipe(take(1)).subscribe(
      res=>{
        res.forEach(element=> {
            //la coleccion se crea dentro del usuario mediante la id guardada en sessionstorage
            if(element.userInfo.id==userId){
            this.db.doc("empresa/"+element.userInfo.id+"/Favoritos/"+userInfo.id).set({userInfo});
            console.log(element.userInfo.id);
            }
        });
      });
  }

  async deleteFavorito(idUserNoFav:string, empresaId:string){
    var userId=sessionStorage.getItem('userId');

    let alumnoFavCollection:AngularFirestoreCollection=this.db.collection<User>('empresa/'+empresaId+"/Favoritos/");
    alumnoFavCollection.valueChanges().pipe(take(1)).subscribe(
      res=>{
        res.forEach(element=> {
          if(empresaId==userId){
            //la coleccion se crea dentro del usuario mediante la id guardada en sessionstorage
            this.db.doc("empresa/"+empresaId+"/Favoritos/" + idUserNoFav).delete();
          }
        });
      }
    )
  }

  async editUserAlumno(userInfo:UserAlumno ){
    //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('alumno');
    console.log(usersCollection.valueChanges())
    usersCollection.valueChanges().pipe(take(1)).subscribe(
      res=>{
        res.forEach(element=> {
            console.log(element.userInfo)
          if(element.userInfo.id==userInfo.id){
            console.log(userInfo.id);
            //la coleccion se crea dentro del usuario mediante la id guardada en sessionstorage
            this.db.doc("alumno/"+element.userInfo.id).update({userInfo});
          }
        });
      });
      let empresaFav:AngularFirestoreCollection=this.db.collection<User>('empresa');
          empresaFav.valueChanges().pipe(take(1)).subscribe(
            res=>{
              res.forEach(element=> {
                  console.log(element);
                  this.db.doc("empresa/"+element.userInfo.id+"/Favoritos/" + userInfo.id).update({userInfo});
                });
            }
          )
  }

  async editarAlumnoAdmin(userInfo:UserAlumno){
     //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('alumno');
    console.log(usersCollection.valueChanges())
    usersCollection.valueChanges().pipe(take(1)).subscribe(
      res=>{
        res.forEach(element=> {
            console.log(element.userInfo)
          if(element.userInfo.id==userInfo.id){
            console.log(userInfo.id);
            //la coleccion se crea dentro del usuario mediante la id guardada en sessionstorage
            this.db.doc("alumno/"+element.userInfo.id).update({userInfo});
          }
        });
      });
      let empresaFav:AngularFirestoreCollection=this.db.collection<User>('empresa');
          empresaFav.valueChanges().pipe(take(1)).subscribe(
            res=>{
              res.forEach(element=> {
                  console.log(element);
                  this.db.doc("empresa/"+element.userInfo.id+"/Favoritos/" + userInfo.id).update({userInfo});
                });
            }
          )
  }

  async borrarAlumnoAdmin(id:string, userInfo:UserAlumno){
    //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('alumno');
    usersCollection.valueChanges().subscribe(
      res=>{
        res.forEach(element=> {
          console.log(id);
          if(element.userInfo.mail==userInfo.mail){
            this.db.doc("alumno/"+id).delete();
          }
        });
    });
    let empresaFav:AngularFirestoreCollection=this.db.collection<User>('empresa');
          empresaFav.valueChanges().pipe(take(1)).subscribe(
            res=>{
              res.forEach(element=> {
                  console.log(element);
                  this.db.doc("empresa/"+element.userInfo.id+"/Favoritos/" + userInfo.id).delete();
                });
            }
          )
  }
  async borrarEmpresaAdmin(id:string, empresa:User){
    //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('empresa');
    usersCollection.valueChanges().subscribe(
      res=>{
        res.forEach(element=> {
          console.log(id);
          if(element.userInfo.mail==empresa.mail){
            this.db.doc("empresa/"+id).delete();
          }
        });
    });
  }

}
