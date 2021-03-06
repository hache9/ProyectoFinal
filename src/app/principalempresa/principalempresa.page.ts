import {
  UserService
} from './../services/user.service';
import {
  UserAlumno
} from './../models/userAlumno.interface';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import {
  User
} from '../models/user.interface';
import {
  Router
} from '@angular/router';
import {
  ModalController,
  AlertController
} from '@ionic/angular';
import {
  FilterComponent
} from '../filter/filter.component';
import {
  ToastService
} from '../services/toast.service';


@Component({
  selector: 'app-principalempresa',
  templateUrl: './principalempresa.page.html',
  styleUrls: ['./principalempresa.page.scss'],
})
export class PrincipalempresaPage implements OnInit {

  constructor(private db: AngularFirestore,
    private router: Router,
    private userService: UserService,
    private modalController: ModalController,
    private alertController: AlertController,
    private toastService: ToastService) {}

  alumnosLista: any;

  ngOnInit() {
    let alumnoCollection: AngularFirestoreCollection = this.db.collection < User > ('alumno');
    alumnoCollection.valueChanges().subscribe(
      res => {
        this.alumnosLista = res;
      }
    )
  }

  mostrarAlumno(userAlumno: UserAlumno) {
    //console.log(userAlumno);
    this.router.navigate(['mostraralumno', {
      userAlumno: JSON.stringify(userAlumno)
    }]);
  }

  async onClickFilter() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      cssClass: "modal-css"
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    this.alumnosLista = data.data;
  }


  async onClickFavorito(alumno: UserAlumno) {
    //console.log(alumno.id);
    //this.userService.userFavorito(alumno);
    const edit = await this.alertController.create({
      header: 'Añadir el alumno ' + alumno.nombreyapellidos + ' a favoritos?',
      buttons: [{
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
            this.userService.userFavorito(alumno);
            this.toastService.presentToast('Alumno' + alumno.nombreyapellidos + ' añadido a favoritos');
          }
        }
      ]
    });
    await edit.present();
  }

  onClickFavPage() {
    this.router.navigateByUrl('/favoritos');
  }
  onClickClose() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userId');
    this.router.navigateByUrl('/home');
  }

}