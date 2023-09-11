import { Injectable } from '@angular/core';
import { Categorie } from '../../models/categorie';

@Injectable()
export class CategorieProvider {
	private categories: Categorie[] = [
		{
			name: 'Mobiliser l’équipe',
			shortname: 'mobiliser',
			description: 'Accompagner le changement et développer la cohésion',
			image: 'assets/imgs/global/1.svg',
			id: 1,
			color: '#00659c',
		},
		{
			name: 'motiver les collaborateurs',
			shortname: 'motiver',
			description: 'Développer l’énergie et rebondir en cas d’échec',
			image: 'assets/imgs/global/3.svg',
			id: 2,
			color: '#002cff',
		},
		{
			name: 'coacher les collaborateurs ', // Developper a motivation
			shortname: 'coacher',
			description: 'Impliquer et accompagner la montée en autonomie',
			image: 'assets/imgs/global/2.svg',
			id: 3,
			color: '#6f00ff',
		},
		{
			name: 'gérer les situations complexes', //garantir la cohesion
			shortname: 'gérer',
			description:
				'Faire preuve de courage et dire les choses difficiles de manière « entendable »',
			image: 'assets/imgs/global/4.svg',
			id: 4,
			color: '#009bff',
		},
	];

	constructor() {}

	public getCategorie(id: number): Categorie {
		return this.categories[id - 1];
	}

	public getCategories(): Categorie[] {
		return this.categories;
	}

	public getRandomCategorie(): Categorie {
		let min = Math.ceil(0);
		let max = Math.floor(this.categories.length);
		let rand = Math.floor(Math.random() * (max - min)) + min;
		return this.categories[rand];
	}

}
