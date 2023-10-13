import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FicheProvider } from 'src/providers/fiche/fiche';
import { CategorieProvider } from 'src/providers/categorie/categorie';

@Component({
  selector: 'app-ideecle',
  templateUrl: './ideecle.page.html',
  styleUrls: ['./ideecle.page.scss'],
})
export class IdeeclePage implements OnInit {

  posts: any;
  id: any;
  alldata: any;
  contents: any;
  idcat: any;
  imagecat: any;
  postscat: any;
  namecat: any;
  imgpost: any;

  constructor(    
    private router: Router,  
    private route: ActivatedRoute,
    private fiche_provider: FicheProvider,
    private categorie_provider: CategorieProvider) { }

  ngOnInit() {

   this.route.params.subscribe(params => {
       this.id= params['id']; 
       this.getData(); 
    });
   }
   
   getData() {
		this.posts = [this.fiche_provider.getFicheKeyById(this.id)];
    console.log(this.posts); 
    this.alldata = this.posts;
   // this.contents = this.posts[0].contents; 
   // this.idcat = this.posts[0].cat_id; 
    this.imgpost = "./assets/fiches/"+this.posts[0].img; 
    this.getCategorieByid();
	}

  getCategorieByid() {
		this.postscat = [this.categorie_provider.getCategorie(this.id)];
    this.imagecat = this.postscat[0].image; 
    this.namecat = this.postscat[0].name; 
	}

	async goCategories() {
    this.router.navigateByUrl('/categorie/'+this.id);
	}
 
}
