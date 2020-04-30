import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {AngularFirestoreCollection,AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user.interface';
import { AlertController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: string = "";
  pass: string = "";
  userfail: string = "";
  passfail: string = "";
  forgot: string = "Forgot Pass"

  constructor(private router: Router,
    private authservice: AuthenticationService,
    private db: AngularFirestore,
    private alertController:AlertController,
    private toastService:ToastService) {}

  
  async goRegister() {
    this.router.navigateByUrl('/register');
  }

  async onClickLogin() {
    console.log(this.user);
    if (this.user.trim() == "") {
      this.userfail = "Please, enter name.";
    } else {
      this.userfail = "";
    }
    if (this.pass.trim() == "") {
      this.passfail = "Please, enter pass.";
    } else {
      this.passfail = "";
    }
    if (this.user.trim() !== "" && this.pass.trim() !== "") {
      console.log(this.user + " " + this.pass);
      //Authenticate
      this.authservice.loginUser(this.user, this.pass).then(() => {
        console.log(this.user);
        sessionStorage.setItem("user", this.user);
        console.log("Usuario logueado correctamente");
        //Toast generado en servicio
        this.toastService.presentToast("Usuario logueado correctamente");

        
        var usermail = sessionStorage.getItem('user');
        //recorrer usuarios de firestone para los administradores
        let usersCollectionAdmin: AngularFirestoreCollection = this.db.collection < User > ('admin');
        usersCollectionAdmin.valueChanges().subscribe(
          res => {
            res.forEach(element => {
              //admin
              if (element.userInfo.mail == usermail && element.userInfo.admin==true) {
                //guardar el user y la id en sessionstorage
                sessionStorage.setItem("userId", element.userInfo.id);
                sessionStorage.setItem("user", this.user);
                this.router.navigateByUrl('/principaladmin');
                console.log("admin");
              }
            });
          });
        //recorrer usuarios de firestone para las empresas
        let usersCollectionEmpresa: AngularFirestoreCollection = this.db.collection < User > ('empresa');
        usersCollectionEmpresa.valueChanges().subscribe(
          res => {
            res.forEach(element => {
              //empresa
              if (element.userInfo.mail == usermail && element.userInfo.admin==false && element.userInfo.empresa==true) {
                //guardar el user y la id en sessionstorage
                sessionStorage.setItem("userId", element.userInfo.id);
                sessionStorage.setItem("user", this.user);
                this.router.navigateByUrl('/principalempresa');
                console.log("empresa");
              }
            });
          });

          //recorrer usuarios de firestone para los alumnos
        let usersCollectionAlumno: AngularFirestoreCollection = this.db.collection < User > ('alumno');
        usersCollectionAlumno.valueChanges().subscribe(
          res => {
            res.forEach(element => {
              //alumno
              if (element.userInfo.mail == usermail && element.userInfo.admin==false && element.userInfo.empresa==false) {
                //guardar el user y la id en sessionstorage
                sessionStorage.setItem("userId", element.userInfo.id);
                sessionStorage.setItem("user", this.user);
                this.router.navigate(['principalalumno', {userAlumno: JSON.stringify(element.userInfo)}]);
                console.log("alumno");
              }
            });
          });

      }, error => {
        console.log(error);

        //Condiciones de mensaje de error.
        if(error.message.includes("email") || error.message.includes("user") ){
          //Toast generado en servicio
          this.toastService.presentToast("El usuario no existe");
        }
        if(error.message.includes("pass")){
          //Toast generado en servicio
          this.toastService.presentToast("Contraseña incorrecta");
        }
      });
    }
  }

  //Restablecer Contraseña
  async onClickForgot(){
    const alert = await this.alertController.create({
      header: 'Please, write your E-Mail',
      inputs: [
        {
          name: 'email',
          id: "email",
          type: 'email',
          placeholder: 'Email'
        }
      ],
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
          handler: (alertData) => {
            console.log(alertData.email);
            //Forgot user
            this.authservice.forgotUser(alertData.email).then(() => {
            console.log("Correo enviado correctamente");
            this.toastService.presentToast("Correo enviado correctamente");
        }, error => {
            console.log(error);
            console.log("Error, correo no existente");
            this.toastService.presentToast("Error, correo no existente");
          });
        }
      }
    ]
   });
   await alert.present();
  }
}