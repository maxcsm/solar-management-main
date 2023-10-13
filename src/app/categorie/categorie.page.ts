import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategorieProvider } from 'src/providers/categorie/categorie';
import { FicheProvider } from 'src/providers/fiche/fiche';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  posts: any;
  id: any=null;
  alldata: any;
  contents: any;
  idcat: any;
  imagecat: any;
  allfiches: any;

  constructor(    
  private router: Router,  
  private route: ActivatedRoute,
  private categorie_provider: CategorieProvider,
  private fiche_provider: FicheProvider) { }


  ngOnInit() {

    this.route.params.subscribe(params => {
        this.id= params['id']; 
        if(this.id==null){
          this.getCatgorieRandom(); 
        } else {
          this.getCategorieByid()
        }
     });
    }

  getCatgorieRandom() {
		this.posts = [this.categorie_provider.getRandomCategorie()];
    this.alldata = this.posts;
    this.contents = this.posts[0].contents; 
    this.idcat = this.posts[0].id; 
    this.imagecat = this.posts[0].image; 
    this.getFichesByCat(); 
	}

   getCategorieByid() {
		this.posts = [this.categorie_provider.getCategorie(this.id)];
    this.alldata = this.posts;
    this.contents = this.posts[0].contents; 
    this.idcat = this.posts[0].id; 
    this.imagecat = this.posts[0].image; 
    this.getFichesByCat(); 
	}


  getFichesByCat(): void {
		this.allfiches = [this.fiche_provider.getFichesByCatId(this.idcat)][0];
	}

  async go(event: any, item: { id: number; }) {
		console.log(item.id);
		this.router.navigateByUrl('fiche/'+item.id );
	}

  async goidee() {
    console.log("-------ID CATEGO----"); 
    console.log(this.id); 
		this.router.navigateByUrl('ideecle/'+this.id );
	}

  async goHome() {
    this.router.navigateByUrl('/home');
	}

  async goMenu() {
    this.router.navigateByUrl('/menu');
	}

}
