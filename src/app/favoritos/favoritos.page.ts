import { UserService } from './../services/user.service';
import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.interface';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { FavfilterComponent } from './../favfilter/favfilter.component';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  
  constructor(private db:AngularFirestore,
    private alertController: AlertController,
    private toastService:ToastService,
    private userService:UserService,
    private router:Router,
    private modalController:ModalController) { }

  alumnosListaFav:any;
  alumnosLista:any;

  empresaId=sessionStorage.getItem('userId');

  ngOnInit() {
    let alumnoFavCollection:AngularFirestoreCollection=this.db.collection<User>('empresa/'+this.empresaId+'/Favoritos/');
    alumnoFavCollection.valueChanges().subscribe(
      res=>{
          this.alumnosListaFav=res;
      }
    )
  }

  showAlumno(userAlumno:UserAlumno){
    console.log(userAlumno);
    this.router.navigate(['mostraralumno', {userAlumno: JSON.stringify(userAlumno)}]);
  }

  async onClickFilterFav(){
    const modal = await this.modalController.create({
      component: FavfilterComponent,
      cssClass: 'modal-css'
    });
      await modal.present();
      const data=await modal.onDidDismiss();
      this.alumnosListaFav=data.data;
  }


  async onClickNoFavorito(alumno:UserAlumno){
    const del = await this.alertController.create({
      header: 'Confirma para eliminar a '+alumno.nombreyapellidos+' de favoritos.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Accept',
          handler: () => {
            this.userService.deleteFavorito(alumno.id, this.empresaId);
            this.toastService.presentToast('Alumno '+alumno.nombreyapellidos+' eliminado de favoritos');
        }
      }
    ]
   });
   await del.present();
  }



}
