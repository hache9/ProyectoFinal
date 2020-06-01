import {
  Component,
  OnInit
} from '@angular/core';
import {
  finalize
} from 'rxjs/operators';
import {
  ImagePicker
} from '@ionic-native/image-picker/ngx';
import {
  AngularFireStorage
} from '@angular/fire/storage';
import {
  UserAlumno
} from '../models/userAlumno.interface';
import {
  ModalController,
  LoadingController,
  NavParams
} from '@ionic/angular';
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {

  constructor(private imagePicker: ImagePicker,
    private storage: AngularFireStorage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private navParams: NavParams,
    private camera: Camera) {}

  /*optionsGallery = {
    maximumImagesCount: 1,
    width:800,
    height:800,
    quality:100,
    outputType:1
  }*/

  optionsCamera: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true,
    correctOrientation: true
  }

  userAlumno: UserAlumno;
  imageUrl: string;

  ngOnInit() {
    this.userAlumno = JSON.parse(this.navParams.get('alumno'));
  }

  onClickClose() {
    this.modalController.dismiss("../../assets/img/noimage.png");
  }

  /*onClickOpenGallery(){
    this.imagePicker.getPictures(this.optionsGallery).then(async (imageData) => {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 1000
      });
      await loading.present();

      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
  
      let base64Image = 'data:image/jpeg;base64,' + imageData;
  
      let photoName = `${this.userAlumno.id}/${this.userAlumno.id}_photo`;
  
      const fileRef = this.storage.ref(photoName);
  
      const task = fileRef.putString(base64Image,'data_url');
  
       task.snapshotChanges().pipe(
         finalize(() => {
           fileRef.getDownloadURL().subscribe(async url => {
            this.imageUrl=url;
            //alert(this.imageUrl);
            loading.dismiss();
            this.modalController.dismiss(this.imageUrl);
           })
         })).subscribe();
      }, (err) => { alert(err) });
  }*/

  onClickOpenCamera() {
    this.camera.getPicture(this.optionsCamera).then(async (imageData) => {
      const loading = await this.loadingController.create({
        message: 'Por favor, espera...',
        duration: 10000
      });
      await loading.present();
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      let photoName = `${this.userAlumno.id}/${this.userAlumno.id}_photo`;

      const fileRef = this.storage.ref(photoName);

      const task = fileRef.putString(base64Image, 'data_url');

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(async url => {
            this.imageUrl = url;
            //alert(this.imageUrl);
            loading.dismiss();
            this.modalController.dismiss(this.imageUrl);
          })
        })).subscribe();

    }, (err) => {
      // Handle error
      //console.log(err);
    });
  }

  onClickMantenerFoto() {
    //console.log(this.userAlumno.imagen);
    if (this.userAlumno.imagen.trim() == "") {
      this.userAlumno.imagen = "../../assets/img/noimage.png";
    }
    this.modalController.dismiss(this.userAlumno.imagen);

  }
}