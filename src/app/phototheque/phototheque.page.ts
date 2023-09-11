import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-phototheque',
  templateUrl: './phototheque.page.html',
  styleUrls: ['./phototheque.page.scss'],
})
export class PhotothequePage implements OnInit {
 
  newimage: any;

  constructor(
    public photoService: PhotoService, 
    public actionSheetController: ActionSheetController,
    private router: Router) {}

  async ngOnInit() {
  
    await this.photoService.loadSaved();
  }


  ionViewWillEnter() {
    this.newimage="";
	}

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photo',
      buttons: [
        {
          text: 'Voir',
          role: 'destructive',
          icon: 'eye',
          handler: () => {
          console.log(photo); 
          this.newimage=photo.webviewPath;
            
          }
        },
        {
        text: 'Supprimer',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }


    async closeImage() {
      this.newimage="";
		}


	  async goHome() {
		this.router.navigateByUrl('/home');
		}
	
	  async goMenu() {
		this.router.navigateByUrl('/menu');
		}


}






