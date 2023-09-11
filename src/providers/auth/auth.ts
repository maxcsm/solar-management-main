import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

const Users = gql`
query {
	checkToken {
		id
	}
}
`;




@Injectable()
export class AuthProvider implements OnInit{
	private storage = window.localStorage;
	data: any;

	constructor(
		private apollo: Apollo,
		public http: HttpClient,
		private router: Router
	//	private apollo: Apollo,
	//	private httpLink: HttpLink
	) {}


	public get isLogged(): boolean {
		return this.storage.getItem('logged') === 'true';
	}
	public set isLogged(value: boolean) {
		this.storage.setItem('logged', value ? 'true' : 'false');
	}
	public set token(value: string) {
		this.storage.setItem('token', value);
	}



	ngOnInit() { }
//gregory@adelios.fr
//Leconoruvo


	public login(email: string, password: string) {
	return new Promise(resolve => {
		this.apollo.mutate({
		mutation: gql`mutation {
	    login (email: "${email}", password: "${password}") {
		token}
		}`,
		})
		.subscribe(res => {
			 if (!res.data) {
				this.isLogged = false;
				} else {
				console.log(res);	
				this.isLogged = true;
				resolve(true);
				}

		  },
		  (err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					console.log(err);
				
				}
				return false;
		});
	});
	}


	public async logout() {
	this.isLogged = false;
	this.router.navigateByUrl('/login');
	}


	

	public forgot_password(email: string) {
		return new Promise((resolve, reject) => {
			this.apollo
				.mutate({
					mutation: gql`mutation {
					askForNewPassword (email: "${email}")
				}`,
				})
				.subscribe(res => {
					if (!res.data) {
					   console.log(res);	
					   }
	   
				 },
				 (err: HttpErrorResponse) => {
					   if (err.error instanceof Error) {
						   console.log(err);
					   
					   }
					   return false;
			   });
		});
	}
}



