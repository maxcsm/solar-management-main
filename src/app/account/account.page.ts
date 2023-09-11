import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'src/providers/auth/auth';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private router: Router, 
    private auth:AuthProvider) { }

  ngOnInit() {}

  async logout() {
	 this.auth.logout();
	}

	async goHome() {
		this.router.navigateByUrl('/home');
	}


}
