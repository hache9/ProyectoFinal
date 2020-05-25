import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { UserService } from '../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, AlertController } from '@ionic/angular';
import { GaleryComponent } from '../galery/galery.component';


@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.page.html',
  styleUrls: ['./editaralumno.page.scss'],
})
export class EditaralumnoPage implements OnInit {

  tipopass:string="password";

  alumno:UserAlumno;
  userEdited:UserAlumno;
  
  alumnoImagen:string;
  textNombre:string;
  textEdad:number;
  textCurso:string;
  textFormacion:string;
  expBool:boolean;
  exp:string;
  textTiempo:string;
  textIdiomas:string;
  nivelBool:boolean;
  nivelActual:string;
  textNivel:string;
  textDatos:string;
  isChecked:boolean=false;

  nombreVacio:string="";
  edadVacia:string="";
  cursoVacio:string="";
  idiomasVacio:string="";
  nivelVacio:string="";
  datosVacio:string="";
  formacionVacia:string="";
  tiempoVacio:string="";

  userAlumno:UserAlumno={
    id:"",
    mail:"",
    password:"",
    admin:false,
    empresa:false,
    imagen:"",
    nombreyapellidos:"",
    edad:null,
    curso:"",
    formacion:"",
    experiencia:false,
    tiempoexp:"",
    idiomas:"",
    nivel:"",
    datos:"",
}


  
nivel = [ 
  {value: 'A1', name:'radioIdioma' },
  {value: 'A2', name:'radioIdioma' },
  {value: 'B1', name:'radioIdioma' },
  {value: 'B2', name:'radioIdioma' },
  {value: 'C1', name:'radioIdioma' },
  {value: 'C2', name:'radioIdioma'}
];



  constructor(private routeParams:ActivatedRoute,
    private router:Router,
    private toastService:ToastService,
    private userService:UserService,
    private db:AngularFirestore,
    private modalController:ModalController,
    private alertController: AlertController) {
    this.routeParams.params.subscribe(params =>{
      this.alumno=JSON.parse(params['userAlumno']);
      console.log(this.alumno);
      this.alumnoImagen=this.alumno.imagen;
      this.textNombre=this.alumno.nombreyapellidos;
      this.textEdad=this.alumno.edad;
      this.textCurso=this.alumno.curso;
      this.expBool=this.alumno.experiencia;
      this.textTiempo=this.alumno.tiempoexp;
      this.textIdiomas=this.alumno.idiomas;
      this.textNivel=this.alumno.nivel;
      this.nivelActual=this.alumno.nivel;
      this.textFormacion=this.alumno.formacion;
      this.textDatos=this.alumno.datos;
    });
   }

  ngOnInit() {
    this.expBool=this.alumno.experiencia;
    console.log(this.textNivel);
    //this.isChecked=this.isRadioChecked();
    console.log(this.isChecked);
  }

  /*isRadioChecked(){
    switch(this.textNivel){
      case "A1":
        return true;
      case "A2":
        return true;
      case "B1":
        return true;
      case "B2":
        return true;
      case "C1":
        return true;
      case "C2":
        return true;
    }
  }*/

  radioGroupChange(event) {
    this.textNivel = event.detail.value;
    console.log(this.textNivel);
  }

  cambiarNivelIdioma(){
    this.textNivel="";
  }

  onClickEditAlumno(){
    if(this.textNombre.trim()==""){
      this.nombreVacio="Por favor, introduce nombre y apellidos.";  
    }else{
      this.nombreVacio="";  
    }
    if(this.textEdad==null){
      this.edadVacia="Por favor, introduce edad.";  
    }else{
      this.edadVacia="";
      if(this.textEdad<14 || this.textEdad>99){
        this.edadVacia="Por favor, introduce edad válida entre 14 y 99 años."; 
      }else{
        this.edadVacia=""; 
      }
    }  
    if(this.textCurso.trim()==""){
      this.cursoVacio="Por favor, introduce curso.";  
    }else{
      this.cursoVacio="";  
    }
    if(this.textFormacion.trim()==""){
      this.formacionVacia="Por favor, introduce formacion.";  
    }else{
      this.formacionVacia="";  
    }
    if(this.expBool==true){
      if(this.textTiempo.trim()==""){
        this.tiempoVacio="Por favor, introduce tiempo de experiencia.";
      }else{
        this.tiempoVacio="";
      }
    }
    if(this.expBool==false){
      this.tiempoVacio="";
      this.textTiempo="";
    }
    if(this.textIdiomas.trim()==""){
      this.idiomasVacio="Por favor, introduce idiomas.";  
    }else{
      this.idiomasVacio="";  
    }
    if(this.nivelBool==true){
      if(this.textNivel.trim()==""){
        this.nivelVacio="Por favor, introduce nivel de idioma.";
      }else{
        this.nivelVacio="";
      }
    }
    if(this.nivelBool==false){
      this.nivelVacio="";
      this.textNivel=this.alumno.nivel;
    }
    if(this.textDatos.trim()==""){
      this.datosVacio="Por favor, introduce datos de interes.";  
    }else{
      this.datosVacio="";  
    }
    if(this.textNombre.trim()!="" && this.textEdad!=null && this.textCurso.trim()!="" && this.textFormacion.trim()!="" && this.expBool==true && this.textTiempo.trim()!="" || this.expBool==false && this.textTiempo.trim()=="" && this.textIdiomas.trim()!="" && this.textNivel.trim()!="" && this.textDatos.trim()!=""){
      
      if(this.textCurso.trim().toUpperCase()!="DAW" && this.textCurso.trim().toUpperCase()!="SMR" && this.textCurso.trim().toUpperCase()!="GA" && this.textCurso.trim().toUpperCase()!="FPB"){
        this.cursoVacio="Por favor, introduce curso válido (DAW, SMR, GA. FPB).";  
        if(this.textEdad<14 || this.textEdad>99){
          this.edadVacia="Por favor, introduce edad válida entre 14 y 99 años."; 
        }else{
          this.edadVacia="";
        }
        }else if(this.textCurso.trim().toUpperCase()=="DAW" || this.textCurso.trim().toUpperCase()=="SMR" || this.textCurso.trim().toUpperCase()=="GA" || this.textCurso.trim().toUpperCase()=="FPB" && this.textEdad>14 || this.textEdad<99){
          this.cursoVacio="";
          if(this.textEdad>=14 && this.textEdad<99){
            this.edadVacia="";

      this.userEdited={
        id:this.alumno.id,
        mail:this.alumno.mail,
        password:this.alumno.password,
        imagen:this.alumnoImagen,
        nombreyapellidos:this.textNombre,
        edad:this.textEdad,
        curso:this.textCurso,
        formacion:this.textFormacion,
        experiencia:this.expBool,
        tiempoexp:this.textTiempo,
        idiomas:this.textIdiomas,
        nivel:this.textNivel,
        datos:this.textDatos,
        admin:false,
        empresa:false
      }      
      this.userService.editUserAlumno(this.userEdited).then(() => {
        console.log("Usuario editado correctamente");
        //Toast generado en servicio
        this.toastService.presentToast("Usuario editado correctamente");
        //this.user="";
        //this.pass="";
        this.router.navigate(['principalalumno', {userAlumno: JSON.stringify(this.userEdited)}]);
      }, error => {
        console.log(error);
        //Toast generado en servicio
        this.toastService.presentToast("Error al editar el Usuario");
        });
    }
  }
}
  }

  

  onClickEye(){
    if(this.tipopass=="password"){
        this.tipopass="text";
    }else{
        this.tipopass="password"
    }
  }

  async onClickSelectImage(){
    console.log("Seleccionar imagen");
    const modal = await this.modalController.create({
      component: GaleryComponent,
      cssClass: "gallery-modal",
      componentProps:{
        'alumno': JSON.stringify(this.alumno)
      }
    });
      await modal.present();
      const data=await modal.onDidDismiss();
      this.alumnoImagen=data.data;
  }

  async onClickGoBack(){
    const back = await this.alertController.create({
      header: 'Si sales no se guardará la información editada.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['principalalumno', {userAlumno: JSON.stringify(this.alumno)}]);
        }
      }
    ]
   });
    await back.present();
  }
}
