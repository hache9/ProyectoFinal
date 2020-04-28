import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user.interface';
import { UserAlumno } from '../models/userAlumno.interface';

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
  async userAlumno(userInfo:UserAlumno){
    userInfo.id=this.db.createId();
    this.db.doc("alumno/" + userInfo.id).set({userInfo});
  }

  async userFavorito(userInfo:UserAlumno){
    var userId=sessionStorage.getItem('userId');
    //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('empresa');
    usersCollection.valueChanges().subscribe(
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
    alumnoFavCollection.valueChanges().subscribe(
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

  async editUserAlumno(id:string, userInfo:UserAlumno ){
    var usermail=sessionStorage.getItem('user');
    var userAlumnoId=sessionStorage.getItem('userId');
    console.log(usermail);

    //recorrer usuarios en firestone y comparar con el de sessionstorage
    let usersCollection:AngularFirestoreCollection=this.db.collection<User>('alumno');
    usersCollection.valueChanges().subscribe(
      res=>{
        res.forEach(element=> {
          console.log(usermail);
          if(element.userInfo.mail==usermail){
            console.log(id);
            //la coleccion se crea dentro del usuario mediante la id guardada en sessionstorage
            this.db.doc("alumno/"+element.userInfo.id).update({userInfo});
            
            /*let empresaFav:AngularFirestoreCollection=this.db.collection<User>('empresa');
              empresaFav.valueChanges().subscribe(
                res=>{
                  res.forEach(element=> {
                    console.log(element);
                      this.db.doc("empresa/"+element.userInfo.id+"/Favoritos/" + userAlumnoId).update({userInfo});
                  });
                }
            )*/
          }
          console.log("hola");
        });
      });
  }

}
