import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

import { LocalService } from 'src/providers/local.service';
import { AuthProvider } from 'src/providers/auth/auth';
//import { Apollo } from 'apollo-angular/apollo';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	
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


    this.email= this.localStore.getItem('email');
    console.log(this.email); 
    this.password=this.localStore.getItem('password');
    console.log(this.password); 

    this.onLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
   })
  }

  submitForm(){
    this.isSubmitted = true;
    if (!this.onLoginForm.valid) {
      console.log('Please provide all the required values!')
    } 

    if (this.onLoginForm.valid) {
      console.log('OK!') 
      this.login(); 
   }
  }

  get errorControl() {
    return this.onLoginForm.controls;
  }


  async login() {
    const loader = await this.LoadingController.create({
    message: "Connexion en cours...",
    duration: 1000
    });
    loader.present();
    var data = JSON.stringify({ 
    email:this.email,
    password: this.password,
    }); 
    this.auth.login(this.email, this.password).then(data => {
    console.log(data);
    if(data==true){
    this.localStore.saveItem('email', this.email);
    this.localStore.saveItem('password', this.password);
    this.router.navigateByUrl('/home');
    }else {
      this.alert();
    }
    })
  .catch(console.log.bind(console));
   setTimeout(() => { 
  
  }, 2000);  
}


 async alert() {
			const toast = await this.toastCtrl.create({
			  cssClass: 'bg-profile',
			  message: 'Identifiant ou mot de passe incorrect',
			  duration: 3000,
			  position: 'bottom',
	});
	toast.present();

}

}
	