import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

import { LocalService } from 'src/providers/local.service';
import { AuthProvider } from 'src/providers/auth/auth';
//import { Apollo } from 'apollo-angular/apollo';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
	
	public onLoginForm!: FormGroup;
	public email: any;
	public password: any;
	public isLoading: boolean=false;
	isSubmitted: boolean= false;
  data: any;

	constructor(
  //private apollo: Apollo,
  private router: Router,
	private localStore: LocalService,
	public formBuilder: FormBuilder,
	public LoadingController: LoadingController,
	public toastCtrl: ToastController,
  private auth:AuthProvider
	) {}

  
  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
   })
  }

  submitForm(){
    this.isSubmitted = true;
    if (!this.onLoginForm.valid) {
      console.log('Please provide all the required values!')
    } 

    if (this.onLoginForm.valid) {
      console.log('OK!') 
      this.forgot(); 
   }
  }

  get errorControl() {
    return this.onLoginForm.controls;
  }

  async forgot() {
  this.auth.forgot_password(this.email).then(data => {
  console.log(data);
  })
  .catch(console.log.bind(console));
  setTimeout(() => { 
  this.alert();
  this.router.navigateByUrl('/login');
  }, 1000);  
  }


 async alert() {
			const toast = await this.toastCtrl.create({
			  cssClass: 'bg-profile',
			  message: 'Nouveau mot de passe envoyé',
			  duration: 3000,
			  position: 'bottom',
	});
	toast.present();

}

}
	