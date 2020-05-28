import { FilterempresasadminComponent } from './../filterempresasadmin/filterempresasadmin.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import { UserEmpresa } from '../models/userEmpresa.interface';

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
    private toastService:ToastService,
    private modalController:ModalController) { }

  ngOnInit() {
    let alumnoCollection:AngularFirestoreCollection=this.db.collection<UserEmpresa>('empresa');
      alumnoCollection.valueChanges().subscribe(
        res=>{
            this.empresasLista=res;
        }
      )
  }
  mostrarEmpresa(empresa:UserEmpresa){
    //console.log(empresa);
    this.router.navigate(['mostrarempresa', {userEmpresa: JSON.stringify(empresa)}]);
  }

  async onClickEditarEmpresa(empresa:UserEmpresa){
    const edit = await this.alertController.create({
      header: '¿Editar la empresa '+empresa.nombre+'?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['editarempresaadmin', {empresa: JSON.stringify(empresa)}]);
        }
      }
    ]
   });
    await edit.present();
    //console.log(empresa);
  }

  async onClickBorrarEmpresa(empresa:UserEmpresa){
    const del = await this.alertController.create({
      header: 'Confirma para eliminar la empresa '+empresa.nombre,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Aceptar',
          handler: () => {
            this.userService.borrarEmpresaAdmin(empresa.id, empresa);
            this.toastService.presentToast('Empresa '+empresa.nombre+' eliminada correctamentamente');
        }
      }
    ]
   });
    await del.present();
    //console.log(empresa);
  }

  async onClickFilter(){
    const modal = await this.modalController.create({
      component: FilterempresasadminComponent,
      cssClass: "modal-css-empresa"
    });
      await modal.present();
      const data=await modal.onDidDismiss();
      this.empresasLista=data.data;
  }


  onClickClose(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId");
    this.router.navigateByUrl('/home');
  }
}
