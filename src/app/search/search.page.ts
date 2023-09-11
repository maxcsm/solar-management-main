import { Component, OnInit, ViewChild } from '@angular/core';
import { Categorie } from 'src/models/categorie';
import { Fiche } from 'src/models/fiche';
import { CategorieProvider } from 'src/providers/categorie/categorie';
import { FicheProvider } from 'src/providers/fiche/fiche';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

	private text: any;
	private state: string = 'std';
	public fiches: Fiche[] = [];
	public categorie: Categorie = {} as Categorie;
  fiche: any;
  word:any;
  


  ngOnInit() {  }
	constructor(

		private fiche_provider: FicheProvider,
		private categorie_provider: CategorieProvider
	) {}

	ionViewDidLoad() {
	//	this.text = this.navParams.get('text');
		this.updateSearch();


	}

	public submit(e: KeyboardEvent) {

		
				this.updateSearch();
				this.state = 'std';

		
	}

	private updateSearch() {
		this.fiches = this.fiche_provider.getFicheBySearch(this.text);
	}

	public openFiche(fiche: Fiche) {
		this.categorie = this.categorie_provider.getCategorie(fiche.cat_id);
		this.fiche.openFiche(fiche.id);
		this.state = 'fiche';
	}
}
