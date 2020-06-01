import {
  UserEmpresa
} from './../models/userEmpresa.interface';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ToastService
} from '../services/toast.service';
import {
  UserService
} from '../services/user.service';
import {
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-editarempresaadmin',
  templateUrl: './editarempresaadmin.page.html',
  styleUrls: ['./editarempresaadmin.page.scss'],
})
export class EditarempresaadminPage implements OnInit {

  empresa: UserEmpresa;
  userEdited: UserEmpresa;

  textNombre: string;
  textCif: string;
  textCalle: string;
  textCp: string;
  textLocalidad: string;
  textTelefono: string;

  nombreVacio: string = "";
  cifVacio: string = "";
  calleVacia: string = "";
  cpVacio: string = "";
  localidadVacia: string = "";
  telefonoVacio: string = "";

  cifInvalido: string = "";
  cpInvalido: string = "";
  telfInvalido: string = "";

  userEmpresa: UserEmpresa = {
    id: "",
    mail: "",
    password: "",
    admin: false,
    empresa: true,
    nombre: "",
    cif: "",
    calle: "",
    cp: "",
    localidad: "",
    telefono: ""
  }

  constructor(private routeParams: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private userService: UserService,
    private alertController: AlertController) {
    this.routeParams.params.subscribe(params => {
      this.empresa = JSON.parse(params['empresa']);
      this.textNombre = this.empresa.nombre;
      this.textCif = this.empresa.cif;
      this.textCalle = this.empresa.calle;
      this.textCp = this.empresa.cp;
      this.textLocalidad = this.empresa.localidad;
      this.textTelefono = this.empresa.telefono;
    });
  }

  ngOnInit() {}

  onClickEditarEmpresa() {
    if (this.textNombre.trim() == "") {
      this.nombreVacio = "Por favor, introduce nombre.";
    } else {
      this.nombreVacio = "";
    }
    if (this.textCif.trim() == "") {
      this.cifVacio = "Por favor, introduce cif.";
    } else {
      this.cifVacio = "";
      if (this.textCif.length != 9) {
        this.cifInvalido = "Por favor introduce 9 carácteres válidos";
      } else if (this.textCif.length == 9) {
        //console.log(this.textCif.length);
        this.cifInvalido = "";
      }
    }
    if (this.textCalle.trim() == "") {
      this.calleVacia = "Por favor, introduce calle.";
    } else {
      this.calleVacia = "";
    }
    if (this.textCp == "") {
      this.cpVacio = "Por favor, introduce código póstal.";
    } else {
      this.cpVacio = "";
      if (this.textCp.toString().length != 5) {
        this.cpInvalido = "Por favor introduce 5 carácteres numéricos";
      } else if (this.textCp.toString().length == 5) {
        //console.log(this.textCp.toString().length);
        this.cpInvalido = "";
      }
    }
    if (this.textLocalidad.trim() == "") {
      this.localidadVacia = "Por favor, introduce localidad.";
    } else {
      this.localidadVacia = "";
    }
    if (this.textTelefono == "") {
      this.telefonoVacio = "Por favor, introduce numero de telefono.";
    } else {
      this.telefonoVacio = "";
      if (this.textTelefono.toString().length != 9) {
        this.telfInvalido = "Por favor introduce 9 carácteres numéricos";
      } else if (this.textTelefono.toString().length == 9) {
        //console.log(this.textTelefono.toString().length);
        this.telfInvalido = "";
      }
    }
    if (this.textNombre.trim() != "" && this.textCif.length == 9 && this.textCalle.trim() != "" && this.textCp.toString().length == 5 && this.textLocalidad.trim() != "" && this.textTelefono.toString().length == 9) {
      this.userEdited = {
        id: this.empresa.id,
        mail: this.empresa.mail,
        password: this.empresa.password,
        admin: this.empresa.admin,
        empresa: this.empresa.empresa,
        nombre: this.textNombre,
        cif: this.textCif,
        calle: this.textCalle,
        cp: this.textCp,
        localidad: this.textLocalidad,
        telefono: this.textTelefono
      }
      this.userService.editarEmpresaAdmin(this.userEdited).then(() => {
        //console.log("Usuario Empresa editado correctamente");
        //Toast generado en servicio
        this.toastService.presentToast("Usuario Empresa editado correctamente");
        this.router.navigateByUrl('mostrarempresasadmin');
      }, error => {
        //console.log(error);
        //Toast generado en servicio
        this.toastService.presentToast("Error al editar el Usuario Empresa");
      });
    }
  }

  async onClickGoBack() {
    const back = await this.alertController.create({
      header: 'Si sales no se guardará la información editada.',
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
            this.router.navigateByUrl('mostrarempresasadmin');
          }
        }
      ]
    });
    await back.present();
  }
}