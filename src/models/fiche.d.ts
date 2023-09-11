interface FicheContent {
	title: string;
	content?: string;
	img?: string;
}
export interface Fiche {
	id: number;
	name: string;
	cat_id: number;
	why: string;
	why_img?: string;
	how?: string;
	contents?: FicheContent[];
	to_remember: string;
	tags: string;
	order: number;
}
/*

-> une image est nommée suivant cette logique :
 'fiche_[id_categorie]_[id_fiche]_[id_image].[jpg|png|svg]'

-> exemple : 'fiche_1_3_7.jpg'
 est donc l'image 7 de la fiche 3 de la categorie 1

 */
