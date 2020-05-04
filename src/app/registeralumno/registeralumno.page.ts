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
  nuevaEdad:string="";
  nuevoCurso:string="";
  nuevaFormacion:string="";
  nuevaExp:boolean=false;
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
    edad:"",
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
    console.log(this.nuevaExp);
  }

  radioGroupChange(event) {
    this.nivelIdioma = event.detail.value;
    console.log(this.nivelIdioma);
  }

  onClickSaveRegister(){
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
    if(this.nuevaEdad==""){
      this.edadVacia="Por favor, introduce edad.";  
    }else{
      this.edadVacia="";  
    }
    if(this.nuevoCurso.trim()==""){
      this.cursoVacio="Por favor, introduce curso.";  
    }else{
      this.cursoVacio="";  
    }
    if(this.nuevaFormacion.trim()==""){
      this.formacionVacia="Por favor, introduce formacion.";  
    }else{
      this.formacionVacia="";  
    }if(this.nuevaExp=true){
      console.log(this.nuevaExp) 
    }else{
      console.log("fail");  
    }
    if(this.nuevoTiempo.trim()==""){
      this.tiempoVacio="Por favor introduce cuanto tiempo de experiencia tienes.";  
      console.log("error");
    }else{
      this.tiempoVacio="";  
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
    if(this.user.trim()!="" && this.pass.trim()!="" && this.nuevoNombre.trim()!="" && this.nuevaEdad!="" && this.nuevoCurso.trim()!="" && this.nuevaFormacion.trim()!="" && this.nuevoTiempo.trim()!="" && this.nuevosIdiomas.trim()!="" /*&& this.nuevosDatos.trim()!=""*/){
      console.log(this.user);
      console.log(this.pass);
      console.log(this.nuevaExp);
      
       this.service.createUserAlumno(this.user, this.pass, this.nuevaImagen, this.nuevoNombre,this.nuevaEdad, this.nuevoCurso, this.nuevaFormacion,this.nuevaExp, this.nuevoTiempo, this.nuevosIdiomas, this.nivelIdioma, this.nuevosDatos).then(() => {
          console.log("Usuario creado correctamente");
          //Toast generado en servicio
          this.toastService.presentToast("Usuario creado correctamente");
          this.user="";
          this.pass="";
          this.nuevoNombre="";
          this.nuevaEdad="";
          this.nuevoCurso="";
          this.nuevaFormacion="";
          this.nuevosIdiomas="";
          this.nuevosDatos="";
          this.router.navigateByUrl('/home');
        }, error => {
          console.log(error);
          //Toast generado en servicio
          this.toastService.presentToast("Error al crear el Usuario");
          });
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
    console.log("Seleccionar imagen");
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
      this.toastService.presentToast(this.nuevaImagen);
  }

}
