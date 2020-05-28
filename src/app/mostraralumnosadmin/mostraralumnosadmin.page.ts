import { FilteralumnosadminComponent } from './../filteralumnosadmin/filteralumnosadmin.component';
import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertController, ModalController } from '@ionic/angular';
import { User } from '../models/user.interface';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-mostraralumnosadmin',
  templateUrl: './mostraralumnosadmin.page.html',
  styleUrls: ['./mostraralumnosadmin.page.scss'],
})
export class MostraralumnosadminPage implements OnInit {

  constructor(private db:AngularFirestore,
    private router:Router,
    private userService:UserService,
    private modalController:ModalController,
    private alertController: AlertController,
    private toastService:ToastService) { }

    alumnosLista:any;

    ngOnInit() {
      let alumnoCollection:AngularFirestoreCollection=this.db.collection<User>('alumno');
      alumnoCollection.valueChanges().subscribe(
        res=>{
            this.alumnosLista=res;
        }
      )
    }

    mostrarAlumno(userAlumno:UserAlumno){
      //console.log(userAlumno);
      this.router.navigate(['mostraralumno', {userAlumno: JSON.stringify(userAlumno)}]);
    }

    async onClickEditarAlumno(alumno:UserAlumno){
      //this.router.navigate(['editaralumnoadmin', {alumno: JSON.stringify(alumno)}]);
      const edit = await this.alertController.create({
        header: '¿Editar el alumno '+alumno.nombreyapellidos+'?',
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
              this.router.navigate(['editaralumnoadmin', {alumno: JSON.stringify(alumno)}]);
          }
        }
      ]
     });
      await edit.present();
    }

    async onClickBorrarAlumno(alumno:UserAlumno){
      const del = await this.alertController.create({
        header: 'Confirma para eliminar alumno '+alumno.nombreyapellidos,
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
              this.userService.borrarAlumnoAdmin(alumno.id, alumno);
              this.toastService.presentToast("alumno eliminado correctamentamente");
          }
        }
      ]
     });
      await del.present();
      //console.log(alumno);
    }

    onClickClose(){
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("userId");
      this.router.navigateByUrl('/home');
    }

    async onClickFilter(){
      const modal = await this.modalController.create({
        component: FilteralumnosadminComponent,
        cssClass: "modal-css"
      });
        await modal.present();
        const data=await modal.onDidDismiss();
        this.alumnosLista=data.data;
    }

}
