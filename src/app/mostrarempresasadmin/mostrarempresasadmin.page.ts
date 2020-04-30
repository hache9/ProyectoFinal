import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-mostrarempresasadmin',
  templateUrl: './mostrarempresasadmin.page.html',
  styleUrls: ['./mostrarempresasadmin.page.scss'],
})
export class MostrarempresasadminPage implements OnInit {

  empresasLista:any;

  constructor(private db:AngularFirestore,
    private router:Router,
    private userService:UserService,
    private alertController: AlertController,
    private toastService:ToastService) { }

  ngOnInit() {
    let alumnoCollection:AngularFirestoreCollection=this.db.collection<User>('empresa');
      alumnoCollection.valueChanges().subscribe(
        res=>{
            this.empresasLista=res;
        }
      )
  }

  async onClickBorrarEmpresa(empresa:User){
    const del = await this.alertController.create({
      header: 'Confirm to delete Restaurant',
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
            this.userService.borrarEmpresaAdmin(empresa.id, empresa);
            this.toastService.presentToast("Empresa eliminada correctamentamente");
        }
      }
    ]
   });
    await del.present();
    console.log(empresa);
  }

  onClickClose(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    this.router.navigateByUrl('/home');
  }
}
