import { UserAlumno } from './../models/userAlumno.interface';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { ModalController } from '@ionic/angular';
import { GaleryComponent } from '../galery/galery.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registeralumno',
  templateUrl: './registeralumno.page.html',
  styleUrls: ['./registeralumno.page.scss'],
})
export class RegisteralumnoPage implements OnInit {

  user:string="";
  pass:string="";
  userfail:string="";
  passfail:string="";
  checkAdmin:boolean=false;
  checkEmpresa:boolean=false;
  tipopass:string="password";

  nuevaImagen:string="../../assets/img/noimage.png";
  nuevoNombre:string="";
  nuevaEdad:number=null;
  nuevoCurso:string="";
  nuevaFormacion:string="";
  nuevaExperiencia:boolean=false;
  //exp:string="";
  nuevoTiempo:string="";
  nuevosIdiomas:string="";
  nuevosDatos:string="";


  nivelIdioma:string="";

  nombreVacio:string="";
  edadVacia:string="";
  cursoVacio:string="";
  formacionVacia:string="";
  tiempoVacio:string="";
  idiomasVacio:string="";
  nivelVacio:string="";
  datosVacio:string="";

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

  constructor(private service:AuthenticationService,
    private router:Router,
    private toastService:ToastService,
    private modalController:ModalController,
    private db:AngularFirestore) { }

  ngOnInit() {
    //console.log(this.nuevaExperiencia);
  }

  radioGroupChange(event) {
    this.nivelIdioma = event.detail.value;
    //console.log(this.nivelIdioma);
  }

  onClickRegistrarAlumno(){
    //console.log(this.nuevoCurso);
    if(this.user.trim()==""){
      this.userfail="Por favor, introduce email.";
    }else{
      this.userfail="";
    }
    if(this.pass.trim()==""){
      this.passfail="Por favor, introduce contraseña.";
    }else{
      this.passfail="";
    }
    if(this.nuevoNombre.trim()==""){
      this.nombreVacio="Por favor, introduce nombre y apellidos.";  
    }else{
      this.nombreVacio="";  
    }
    if(this.nuevaEdad==null){
      this.edadVacia="Por favor, introduce edad.";  
    }else{
      this.edadVacia="";
      if(this.nuevaEdad<14 || this.nuevaEdad>99){
        this.edadVacia="Por favor, introduce edad válida entre 14 y 99 años."; 
      }else{
        this.edadVacia=""; 
      }
    }    
    if(this.nuevoCurso.trim()==""){
      this.cursoVacio="Por favor, introduce curso.";  
    }else if(this.nuevoCurso.trim()!=""){
      this.cursoVacio="";
    }
    if(this.nuevaFormacion.trim()==""){
      this.formacionVacia="Por favor, introduce formacion.";  
    }else{
      this.formacionVacia="";  
    }
    if(this.nuevaExperiencia==true){
      if(this.nuevoTiempo.trim()==""){
        this.tiempoVacio="Por favor, introduce tiempo de experiencia.";
      }else{
        this.tiempoVacio="";
      }
    }
    if(this.nuevaExperiencia==false){
      this.tiempoVacio="";
      this.nuevoTiempo="";
    }
    if(this.nuevosIdiomas.trim()==""){
      this.idiomasVacio="Por favor, introduce idiomas.";  
    }else{
      this.idiomasVacio="";  
    }
    if(this.nivelIdioma.trim()==""){
      this.nivelVacio="Por favor, introduce nivel de idioma.";  
    }else{
      this.nivelVacio="";  
    }
    if(this.nuevosDatos.trim()==""){
      this.datosVacio="Por favor, introduce datos de interes.";  
    }else{
      this.datosVacio="";  
    }
    if(this.user.trim()!="" && this.pass.trim()!="" && this.nuevoNombre.trim()!="" && this.nuevaEdad!=null && this.nuevoCurso.trim()!="" && this.nuevaFormacion.trim()!="" && this.nuevaExperiencia==true && this.nuevoTiempo.trim()!="" && this.nuevosIdiomas.trim()!="" && this.nuevosDatos.trim()!=""){
      //console.log(this.user);
      //console.log(this.pass);

      if(this.nuevoCurso.trim().toUpperCase()!="DAW" && this.nuevoCurso.trim().toUpperCase()!="SMR" && this.nuevoCurso.trim().toUpperCase()!="GA" && this.nuevoCurso.trim().toUpperCase()!="FPB"){
        this.cursoVacio="Por favor, introduce curso válido (DAW, SMR, GA. FPB).";  
        if(this.nuevaEdad<14 || this.nuevaEdad>99){
          this.edadVacia="Por favor, introduce edad válida entre 14 y 99 años."; 
        }else{
          this.edadVacia="";
        }
        }else if(this.nuevoCurso.trim().toUpperCase()=="DAW" || this.nuevoCurso.trim().toUpperCase()=="SMR" || this.nuevoCurso.trim().toUpperCase()=="GA" || this.nuevoCurso.trim().toUpperCase()=="FPB" && this.nuevaEdad>14 || this.nuevaEdad<99){
          this.cursoVacio="";
          if(this.nuevaEdad>=14 && this.nuevaEdad<99){
            this.edadVacia="";
            this.service.createUserAlumno(this.user.toLowerCase(), this.pass, this.nuevaImagen, this.nuevoNombre,this.nuevaEdad, this.nuevoCurso, this.nuevaFormacion,this.nuevaExperiencia, this.nuevoTiempo, this.nuevosIdiomas, this.nivelIdioma, this.nuevosDatos).then(() => {
              //console.log("Usuario creado correctamente");
              //Toast generado en servicio
              this.toastService.presentToast("Usuario creado correctamente");
              this.user="";
              this.pass="";
              this.nuevoNombre="";
              this.nuevaEdad=null;
              this.nuevoCurso="";
              this.nuevaExperiencia=false;
              this.nuevaFormacion="";
              this.nuevosIdiomas="";
              this.nuevosDatos="";
              this.router.navigateByUrl('/home');
            }, error => {
              //console.log(error);
              //Toast generado en servicio
              this.toastService.presentToast("Formato E-mail o contraseña erroneo");
            });
          }
        }
      }

      if(this.user.trim()!="" && this.pass.trim()!="" && this.nuevoNombre.trim()!="" && this.nuevaEdad!=null && this.nuevoCurso.trim()!="" && this.nuevaFormacion.trim()!="" && this.nuevaExperiencia==false && this.nuevoTiempo.trim()=="" && this.nuevosIdiomas.trim()!="" && this.nuevosDatos.trim()!=""){
        //console.log(this.user);
        //console.log(this.pass);
        
        if(this.nuevoCurso.trim().toUpperCase()!="DAW" && this.nuevoCurso.trim().toUpperCase()!="SMR" && this.nuevoCurso.trim().toUpperCase()!="GA" && this.nuevoCurso.trim().toUpperCase()!="FPB"){
          this.cursoVacio="Por favor, introduce curso válido (DAW, SMR, GA. FPB).";  
          if(this.nuevaEdad<14 || this.nuevaEdad>99){
            this.edadVacia="Por favor, introduce edad válida entre 14 y 99 años."; 
          }else{
            this.edadVacia="";
          }
          }else if(this.nuevoCurso.trim().toUpperCase()=="DAW" || this.nuevoCurso.trim().toUpperCase()=="SMR" || this.nuevoCurso.trim().toUpperCase()=="GA" || this.nuevoCurso.trim().toUpperCase()=="FPB" && this.nuevaEdad>14 || this.nuevaEdad<99){
            this.cursoVacio="";
            if(this.nuevaEdad>=14 && this.nuevaEdad<99){
              this.edadVacia="";
         this.service.createUserAlumno(this.user.toLowerCase(), this.pass, this.nuevaImagen, this.nuevoNombre,this.nuevaEdad, this.nuevoCurso, this.nuevaFormacion,this.nuevaExperiencia, this.nuevoTiempo, this.nuevosIdiomas, this.nivelIdioma, this.nuevosDatos).then(() => {
            //console.log("Usuario creado correctamente");
            //Toast generado en servicio
            this.toastService.presentToast("Usuario creado correctamente");
            this.user="";
            this.pass="";
            this.nuevoNombre="";
            this.nuevaEdad=null;
            this.nuevoCurso="";
            this.nuevaExperiencia=false;
            this.nuevaFormacion="";
            this.nuevosIdiomas="";
            this.nuevosDatos="";
            this.router.navigateByUrl('/home');
          }, error => {
            //console.log(error);
            //Toast generado en servicio
            this.toastService.presentToast("Formato E-mail o contraseña erroneo");
            });
        }
      }
      }
    }
    
  //El ojo, crear tipopass en password y se hace la condicion.(Esta declarado en el html)
  onClickEye(){
    if(this.tipopass=="password"){
        this.tipopass="text";
    }else{
        this.tipopass="password"
    }
  }

  async onClickSelectImage(){
    this.userAlumno.id=this.db.createId();
    //console.log("Seleccionar imagen");
    const modal = await this.modalController.create({
      component: GaleryComponent,
      cssClass: "gallery-modal",
      componentProps:{
        'alumno': JSON.stringify(this.userAlumno)
      }
    });
      await modal.present();
      const data=await modal.onDidDismiss();
      this.nuevaImagen=data.data;
  }

}
