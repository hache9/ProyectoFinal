import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principalempresa',
  templateUrl: './principalempresa.page.html',
  styleUrls: ['./principalempresa.page.scss'],
})
export class PrincipalempresaPage implements OnInit {

  constructor(private db:AngularFirestore,
    private router:Router) { }

  alumnosLista:any;

  ngOnInit() {
    let alumnoCollection:AngularFirestoreCollection=this.db.collection<User>('alumno');
    alumnoCollection.valueChanges().subscribe(
      res=>{
          this.alumnosLista=res;
      }
    )
  }


  onClickClose(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    this.router.navigateByUrl('/home');
  }

}
