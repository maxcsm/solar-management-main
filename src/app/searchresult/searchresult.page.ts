import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheProvider } from 'src/providers/fiche/fiche';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.page.html',
  styleUrls: ['./searchresult.page.scss'],
})
export class SearchresultPage implements OnInit {
  filter: any;
  posts: any;

  constructor(
    private router: Router,  
    private route: ActivatedRoute,
    private fiche_provider: FicheProvider,
  ) { }

  ngOnInit() {}


  ionViewWillEnter() {
		this.posts = [];
	}


	async goHome() {
	this.router.navigateByUrl('/home');
	}
	
	async goMenu() {
	this.router.navigateByUrl('/menu');
	}


  async onChangeWord(event:any){
  this.filter=event.target.value;
  this.getDataFilter();
 }




async getDataFilter() {
  this.posts = this.fiche_provider.getFicheBySearch(this.filter);
   console.log(this.posts); 
   console.log(this.posts.lenght);
}


async go(event: any, item: { id: number; }) {
  console.log(item.id);
  this.router.navigateByUrl('fiche/'+item.id );
}

}
