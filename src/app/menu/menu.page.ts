import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Categorie } from 'src/models/categorie';
import { CategorieProvider } from 'src/providers/categorie/categorie';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    public state: string = 'closed';
	public top: number = 0;

	public categories: Categorie[] = [{}, {}, {}, {}] as Categorie[];
	@Input()
  navbar!: { state: string; };

	constructor(
		private el: ElementRef,
		private nav: NavController,
		private catProvider: CategorieProvider, 
		private router: Router,  
		private route: ActivatedRoute,
	) {
		this.el.nativeElement.className = this.state;
		this.categories = this.catProvider.getCategories();
	}

	ngOnInit() {}

	public toggle() {
		if (this.state == 'closed') {
			this.open();
		} else {
			this.close();
		}
	}

	public open() {
		this.top = this.el.nativeElement.getBoundingClientRect().y * -1 + 85;
		this.el.nativeElement.className = this.state = 'opened';
	}

	public close() {
		this.el.nativeElement.className = this.state = this.navbar.state = 'closed';
	}

	public goToHome() {
		//this.nav.popToRoot({ animate: false });
	}

	public search(e: KeyboardEvent) {
		console.log(e);
		if (e.keyCode === 13) {
			this.close();
		}
	}


	async goHome() {
		this.router.navigateByUrl('/home');
		}
	
	  async goMenu() {
		this.router.navigateByUrl('/menu');
		}

}
