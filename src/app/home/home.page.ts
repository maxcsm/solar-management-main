import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Fiche } from 'src/models/fiche';
import { FicheProvider } from 'src/providers/fiche/fiche';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	fiche!: Fiche[];
	@ViewChild('btn')
	btn!: ElementRef;
	@ViewChild('blocsearch')
	blocsearch!: ElementRef;
	hiddensearch: boolean=false;
	
	constructor(
	private fiche_provider: FicheProvider,
	private router: Router,
	private renderer: Renderer2) {}
	private state: string = 'closed';


	ngOnInit() {
	this.hiddensearch = false;
	}


	slideOpts = {
		autoplay: true,
		initialSlide: 1,
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 0,
		zoom:{
		  maxRatio: 1
		}
	  };


	ionViewDidLoad() {
		this.hiddensearch =false;
		this.fiche = [this.fiche_provider.getRandomFiche()];
	}

	ionViewWillEnter() {
		this.hiddensearch = false;
		this.fiche = [this.fiche_provider.getRandomFiche()];
	}

	async go(event: any, item: { id: number; }) {
		this.router.navigateByUrl('fiche/'+item.id );
	}
	
	isOpen() {
		return this.state == 'closed' ? false : true;
	}

	toggle() {
		if (this.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		this.state = 'opened';
	}

	close() {
		this.state = 'closed';
	}

	async goMenu() {
		this.router.navigateByUrl('/menu');
	}

	applyBounce() {
	
		setTimeout(() => {
			this.renderer.addClass(this.btn.nativeElement, 'bounce');
		}, 200);

		setTimeout(() => {
			this.hiddensearch =!this.hiddensearch;
			//this.renderer.addClass(this.btn.nativeElement, 'hidden');
			//this.renderer.addClass(this.blocsearch.nativeElement, 'show');
		}, 400);


		setTimeout(() => {
			this.renderer.addClass(this.btn.nativeElement, 'bounce');
		}, 800);


	  }

}
