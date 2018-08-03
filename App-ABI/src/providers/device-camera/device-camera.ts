
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class DeviceCameraProvider {

  private options: CameraOptions = {
    quality: 100,
    correctOrientation: true,
    mediaType: this.camera.MediaType.PICTURE,
    encodingType: this.camera.EncodingType.JPEG,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  }

  constructor(public camera: Camera) {}

  openCamera(openGalery:boolean){
    var prom = new Promise((resolve,reflect)=> {
      this.options.sourceType =  openGalery ?  this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA
      this.camera.getPicture(this.options).then((imageData) => {  
        resolve(`data:image/jpeg;base64,${imageData}`);
       }, (err) => {
         reflect(err);
       });
    })
    return prom;
  }
}
