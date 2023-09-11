import { Injectable } from '@angular/core';
import { FicheKey } from '../../models/fiche_key';
import { Fiche } from '../../models/fiche';
@Injectable()
export class FicheProvider {
	public fiches = [
		{
			id: 0,
			name: 'Comment construire sa stratégie ?',
			cat_id: 1,
			order: 1,
			why: 'Pour mobiliser en donnant du sens à l’action',
			why_img: 'strat.jpg',
			contents: [
				{
					title: 'Donner du sens à ma stratégie',
					content: `
          1. En quoi s’inscrit –elle dans le projet de l’entreprise ?
          2. En quoi est-elle alignée avec les valeurs de l’entreprise ?
          `,
				},
				{
					title: 'Faire un état des lieux par une analyse FFMO',
					img: 'fiche_1_0_1.svg',
				},
				{
					title: 'Déduire des enjeux de la matrice',
					content: `
          1. Saisir une opportunité en s’appuyant sur ses forces
          2. Contrer une menace en s’appuyant sur ses forces
          3. Réduire ses faiblesses en s’appuyant sur ses forces
          `,
				},
				{
					title:
						'Pour chaque enjeux définir des objectifs avec indicateurs et délais',
				},
				{
					title:
						'Définir les moyens à mettre en œuvre à disposition de l’équipe',
				},
				{
					title: 'Définir les priorités d’actions de l’équipe par objectif',
					img: 'fiche_1_0_2.svg',
				},
			],
			to_remember:
				'«&nbsp;*On convainc par l’envie liée au sens : le pourquoi avant d’expliquer la stratégie :  le comment*&nbsp;»',
			tags:
				'stratégie, strategie, strat, strategies, Stratégie, Strategies, objectif, objectifs, Objectif, Objectifs, échec, Echec, Échec, echecs, échecs, succès, succes, succe, succè, progres, Progres, progrés, Progrés, sens, Sens, FFMO, ffmo, enjeux,Enjeux, enjeu, Enjeu, objectifs, Objectifs, moyen, Moyen, moyens, Moyens, priorités, Priorités, priorité, Priorité',
		},
		{
			id: 1,
			name: 'Comment présenter une information ?',
			cat_id: 1,
			order: 4,
			why:
				'Pour développer la fierté d’appartenance, l’attachement et l’implication des collaborateurs',
			why_img: 'fiche_1_1_1.svg',
			contents: [
				{
					title: 'Introduire le sujet :',
					content: `
          1. De quoi parle-t-on ? (idéalement commencer par une anecdote)
          2. Donner du sens : en quoi cette information est importante ? Relier l’information avec le quotidien des collaborateurs
          3. Relier l’information avec le quotidien des collaborateurs
          4. «&nbsp;*Déminer*&nbsp;» les résistances prévisibles : «&nbsp;*Je sais que…*&nbsp;»
          `,
				},
				{
					title: 'Présenter l’information',
				},
				{
					title:
						'Inciter à poser des questions  : «&nbsp;*Vos questions m’intéressent*&nbsp;»',
				},
				{
					title: 'Conclure par les 3 points à retenir',
				},
			],
			to_remember:
				'«&nbsp;*C’est la traduction des conséquences de l’information par des exemples concrets dans le vécu des collaborateurs qui est source d’impact*&nbsp;»',
			tags:
				'présenter, Présenter, presenter, Presenter, information, Information, info, donner, Donner, appartenance, Appartenance, attachement, Attachement, implication, Implication, introduire, Introduire, intro, Intro, introduction, Introduction, illustrer, Illustrer, expliquer, Expliquer, sens, Sens',
		},
		{
			id: 2,
			name: 'Comment lancer un nouveau projet ou une séquence ?',
			cat_id: 1,
			order: 2,
			why: 'Pour mobiliser l’énergie de l’équipe',
			why_img: 'fiche_1_2_1.svg',
			how: `
      1. Expliquer le contexte et les enjeux qui en découlent
      2. Annoncer les objectifs à atteindre (avec indicateurs et délais)
      3. Annoncer les difficultés à venir
      4. Expliquer les moyens donnés
      5. Concentrer les collaborateurs sur quelques priorités
      6. Rappeler les valeurs et les comportements attendus pour réussir
      7. Encourager par un message positif en rappelant la principale condition de succès
      `,
			to_remember:
				'«&nbsp;*la cohérence et donc la motivation viennent de l’alignement entre le pourquoi et le comment*&nbsp;»',
			tags:
				'lancer, Lancer, projet, Projet, séquence, Séquence, sequence, Sequence, lancement, Lancement, mobiliser, Mobiliser, énergie, Energie, energie, expliquer, Expliquer, annoncer, Annoncer, concentrer, Concentrer, rappeler, Rappeler, encourager, Encourager',
		},
		{
			id: 3,
			name: 'Comment accompagner un changement ?',
			cat_id: 1,
			order: 3,
			why: 'Pour permettre à l’équipe de s’approprier le changement',
			why_img: 'fiche_1_3_1.svg',
			contents: [
				{
					title: 'Préparer un planning :',
					content: `
          1. Date de l’annonce
          2. Période d’entretiens individuels
          3. Date du changement effectif
          4. Dates des formations ou groupes de travail
          5. Dates des points intermédiaires
          `,
				},
				{
					title: 'Définir les sujets sur lesquels impliquer les collaborateurs',
				},
				{
					title: 'Préparer le lancement :',
					content: `
          1. En alignant le changement avec les valeurs et le projet de l’entreprise
          2. En faisant un bilan positif du passé
          3. En expliquant ce qui ne change pas
          4. En expliquant les gains associés au changement
          5. En anticipant les résistances de collaborateurs
          `,
				},
				{
					title: 'Annoncer le changement',
				},
				{
					title:
						'Organiser des entretiens individuels pour receuillir les réactions',
				},
				{
					title: 'Animer des groupes de travail pour impliquer',
				},
				{
					title: 'Fêter les avancées lors des points intermédiaires',
				},
			],
			to_remember:
				'«&nbsp;*La réussite du changement dépend de la mise en œuvre de conditions  de management*&nbsp;»',
			tags:
				'accompagner, Accompagner, changement, Changement, guider, Guider, planning, Planning, date, Date, annonce, Annonce, période, Période, periode, Periode, définir, Définir, definir, Definir, lancement, Lancement, bilan, Bilan, positif, Positif, annoncer, Annoncer, gérer, Gérer, gerer, Gerer, animer, Animer, fêter, Fêter',
		},
		{
			id: 4,
			name: 'Comment animer un brainstorming ?',
			cat_id: 3,
			order: 4,
			why: 'Pour impliquer l’équipe et rendre les collaborateurs acteurs',
			why_img: 'brainstorm.jpg',
			contents: [
				{
					title:
						'Ecrire la question précise sur un support et rappeler la règle du jeu : «&nbsp;*toutes les idées sont bienvenues, le tri se fait à la fin*&nbsp;»',
				},
				{
					title: 'Animer les interventions :',
					content: `
          1. Valoriser la première proposition
          2. Écrire toutes les propositions
          3. Écrire avec les mots exacts proposés
          `,
				},
				{
					title:
						'Reprendre les propositions et les classer dans la matrice de décision',
					img: 'fiche_1_4_1.svg',
				},
				{
					title: 'Reformuler la synthèse des décisions prises',
				},
			],
			to_remember:
				'«&nbsp;*L’efficacité du management participatif dépend de la qualité de la question posée*&nbsp;»',
			tags:
				'Animer, animer, brainstorming, Brainstorming, brainstorm, Brainstorm, impliquer, Impliquer, présenter, Présenter, presenter, Présenter, animer, Animer, règle, Règle, regle, Regle, tri, Tri, trier, Trier, idée, Idée, idee, Idee, proposition, Proposition, reformuler, Reformuler, synthèse, Synthèse, synthese, Synthese, reformuler, Refurmuler',
		},
		{
			id: 5,
			name: 'Comment développer son écoute ?',
			cat_id: 2,
			order: 1,
			why:
				'Pour développer le niveau d’énergie et créer un climat de confiance',
			why_img: 'listen.jpg',
			contents: [
				{
					title:
						'Utiliser des questions ouvertes  : «&nbsp;*Comment.. ?*&nbsp;» , «&nbsp;*Raconte moi.. ?*&nbsp;»',
				},
				{
					title: 'Attitude ouverte et bienveillante : ne pas couper la parole',
				},
				{
					title:
						'Attention maximum : regards soutenus, acquiescements réguliers',
				},
				{
					title: 'Prendre des notes des points à creuser ultérieurement.',
				},
				{
					title: 'Relancer pour creuser :',
					content: `
          1. Relancer par le silence (3 à 5 secondes)
          2. Relance écho : répéter un mot que l’on veut creuser, une dissonance («&nbsp;Plutôt, globalement, presque…&nbsp;»)
          3. Relance écho + C’est-à-dire ?
          4. Reformuler : «&nbsp;*Si je comprends bien…*&nbsp;»
          `,
					img: 'fiche_2_5_1.svg',
				},
			],
			to_remember:
				'«&nbsp;*Ecouter c’est s’oublier pour aller visiter le monde de l’autre*&nbsp;»',
			tags:
				'développer, Développer, developper, Developper, écoute, ecoute, Ecoute, ecouter, Ecouter, écouter, energie, énergie, Energie, confiance, Confiance, attitude, Attitude, attention, Attention, regard, Regard, regards, Regards, relance, Relance, relancer, Relancer, reformuler, Reformuler',
		},
		{
			id: 6,
			name: 'Comment valoriser un collaborateur ?',
			cat_id: 2,
			order: 2,
			why:
				'Pour donner de l’énergie par la reconnaissance des difficultés surmontées',
			why_img: 'fiche_2_6_1.svg',
			how: `
      1. Faire le constat factuel du résultat : «&nbsp;*J’ai vu que...*&nbsp;»
      2. Donner la parole au collaborateur : «&nbsp;*Comment ça s’est passé ?*&nbsp;»
      3. Pratiquer *l’écoute active* pour détecter les difficultés rencontrées, les progrès réalisés.
      4. Reformuler les difficultés surmontées
      5. Faire un bref compliment portant sur la qualité du collaborateur que l’on veut valoriser
      `,
			to_remember:
				'« *C’est l’écoute du succès qui donne l’énergie et permet un compliment juste et proportionné*&nbsp;»',
			tags:
				'valoriser, Valoriser, féliciter, Féliciter, feliciter, Féliciter, collaborateur, Collaborateur, énergie, energie, Energie, reconnaissance, Reconnaissance, constat, Constat, parole, Parole, reformuler, Reformuler, compliment, Compliment, progrès, Progrès, progres, Progres',
		},
		{
			id: 7,
			name: 'Comment gérer une démotivation ?',
			cat_id: 2,
			order: 3,
			why: 'Pour stopper un processus de démotivation et trouver une solution',
			why_img: 'fiche_2_7_1.svg',
			how: `
      1. Introduire l’entretien en évoquant les changements de comportements constatés
      2. Donner la parole au collaborateur pour comprendre : «&nbsp;*J’aimerais t’écouter par rapport à ça ?*&nbsp;»
      3. Pratiquer l’écoute active pour identifier les raisons de la démotivation.
      4. Exprimer sa compréhension : «&nbsp;*C’est normal de …*&nbsp;»
      5. Rechercher une solution : «&nbsp;*Qu’est-ce que tu proposes ?*&nbsp;»
      6. Décider d’une solution et veiller à sa mise en oeuvre
      `,
			to_remember:
				'«&nbsp;*La prise de confiance via l’écoute active doit déclencher la prise de conscience  étape indispensable pour rechercher une solution*&nbsp;»',
			tags:
				'gérer, Gérer, gerer, Gérer, démotivation, Démotivation, demotivation, Demotivation, solution, Solution, solutions, Solutions, rappeler, Rappeler, enjeux, Enjeux, enjeu, Enjeu, raconter, Raconter',
		},
		{
			id: 8,
			name: 'Comment faire le bilan d’un succès (collectif) ?',
			cat_id: 2,
			order: 4,
			why: 'Pour générer de l’énergie collective',
			why_img: 'success.jpg',
			how: `
      1. Rappeler les enjeux et les objectifs
      2. Raconter la période écoulée et les difficultés rencontrées
      3. Citer des services contributeurs
      4. Annoncer les résultats positifs
      5. Féliciter et donner un enseignement à l’origine du succès
      6. Organiser un moment festif
      `,
			to_remember:
				'«&nbsp;*Le bilan d’une victoire est l’occasion de tirer des enseignements pour reproduire le succès*&nbsp;»',
			tags:
				'bilan, Bilan, succes, Succes, succès, Succès, collectif, Collectif, collective, Collective, objectif, Objectif, objectifs, Objectifs, positifs, Positifs, positif, Positif, analyse, Analyse, cause, Cause, causes, Causes, action, Action, actions, Actions, condition, Condition, conditions, Conditions, service, Service, services, Services, résultat, Résultat, resultat, Resultat, feliciter, Feliciter, féliciter, Féliciter, organiser, Organiser',
		},
		{
			id: 9,
			name: 'Comment remotiver après un échec (collectif) ?',
			cat_id: 2,
			order: 5,
			why: 'Pour redonner de l’énergie malgré le caractère négatif du résultat',
			why_img: 'team.jpg',
			how: `
      1. Rappeler les objectifs et les enjeux
      2. Annoncer les résultats
      3. Mentionner les difficultés rencontrées
      4. Citer les points positifs : efforts, progrès
      5. Présenter une analyse de l’échec en distinguant les causes externes des causes internes
      6. Annoncer les actions correctives décidées
      7. Conclure sur la condition de succès sur laquelle se concentrer
      `,
			to_remember:
				'«&nbsp;*Dans l’échec c’est la prise de conscience des points positifs qui permet d’accepter l’analyse et de rebondir*&nbsp;»',
			tags:
				'remotiver, Remotiver, échec, Echec, echec, collectif, Collectif, resultat, Resultat, résultat, Résultat, mauvais, Mauvais, négatif, Négatif, negatif, Negatif, annoncer, Annoncer, mentionner, Mentionner, collectif, Collectif, analyse, Analyse, corrective, Corrective, correctives, Correctives, condition, Condition, conditions, Conditions, présenter, Présenter, presenter, Presenter',
		},
		{
			id: 10,
			name: 'Comment conduire un entretien annuel  ?',
			cat_id: 3,
			order: 5,
			why:
				'Pour permettre au collaborateur de prendre du recul sur son projet professionnel, ses progrès et ses axes de travail et au manager d’exprimer son appréciation sur une année de travail',
			why_img: 'fiche_3_10_1.svg',
			contents: [
				{
					title: 'Bilan global de l’année :',
					content:
						'«&nbsp;*Avant de regarder l’année en détail, comment l’as-tu vécue : tes principales satisfactions et difficultés ?*&nbsp;»',
				},
				{
					title: 'Evaluation de la performance',
					content: `
          1. Faire le point sur les objectifs : analyse des écarts (raisons du succès ou de l’échec)
          2. La grille de compétence : Ecouter d’abord la vision du collaborateur : points forts puis points de progrès
          3. Reprendre ensuite :
            1/ Les points positifs
            2/ Les points d’amélioration : noter les progrès cités par le collaborateur
            3/ Les points de désaccord : reformuler la part de vrai dans ses propos (les progrès réalisés) avant d’ajouter ses arguments
          `,
				},
				{
					title: 'Les souhaits d’évolution à moyen terme',
					content:
						'Faire réflechir le collaborateur sur son projet professionnel',
				},
				{
					title:
						'En fonction des souhaits d’évolution et du bilan de l’année précédente définir des objectifs pour l’année à venir',
				},
			],
			to_remember:
				'«&nbsp;*L’entretien annuel est un instantané sur un parcours professionnel : il permet de se situer et de se (re)mettre en projet*&nbsp;»',
			tags:
				'conduire, Conduire, entretien, Entretien, annuel, Annuel, recul, Recul, bilan, Bilan, evaluation, Evaluation, évaluation, évaluer, Evaluer, evaluer, objectif, Objectif, objectifs, Objectifs, évolution, Evolution, année, Année, annee, Annee, performance, Performance',
		},
		{
			id: 11,
			name: 'Comment conduire un briefing ?',
			cat_id: 3,
			order: 1,
			why: 'Pour anticiper, préparer afin de garantir le succès de l’action',
			why_img: 'fiche_3_11_1.svg',
			how: `
      1. Présenter la mission et son enjeu
      2. Précision de l’objectif avec indicateur et délai
      3. Ecoute du collaborateur : «&nbsp;*Comment vois-tu ça ?*&nbsp;»
      4. Reformulation et validation des doutes : : «&nbsp;*C’est normal de …*&nbsp;»
      5. Construction du plan : «&nbsp;*Comment comptes tu t’y prendre ?*&nbsp;»
      6. Aider le collaborateur à identifier les conditions de succès : «&nbsp;*D’après toi qu’est-ce qui va être le plus important?*&nbsp;»
      7. Formalisation des points clés par écrit
      8. Prendre rendez-vous pour le débriefing
      `,
			to_remember:
				'«&nbsp;*Plus on m’impose plus je m’oppose, plus on m’implique plus je m’applique !*&nbsp;»',
			tags:
				'déléguer, Déléguer, délégé, Délégé, mission, Mission, tâche, Tâche, tache, Tache, garantir, Garantir, succès, Succès, succes, Succes, objectif, Objectif, objectifs, Objectifs, ecoute, Ecoute, ecouter, Ecouter, écoute, écouter, plan, Plan, reformulation, Reformulation, formalisation, Formalisation, rendez-vous, Rendez-vous, débriefing, Débriefing, debrief, Debrief, debriefing, Debrefing, enjeu, Enjeu',
		},
		{
			id: 12,
			name: 'Comment conduire un débriefing ?',
			cat_id: 3,
			order: 2,
			why:
				'Pour développer les compétences du collaborateur en l’aidant à capitaliser sur l’action en tirant des enseignements',
			why_img: 'fiche_3_12_1.svg',
			how: `
      1. Constat du résultat par rapport à l’objectif
      2. Ecoute du collaborateur : «&nbsp;*Comment ça s’est passé?*&nbsp;»
      3. Repérages des points positifs et des difficultés rencontrées
      4. Valorisation des points positifs
      5. Questionnement du collaborateur pour approfondir les difficultés et en retirer des enseignements
      6. Aider le collaborateur à capitaliser : «&nbsp;*Si tu avais à refaire, que ferais-tu pareil, que ferais-tu différemment ?*&nbsp;»
      7. Reformuler l’enseignement principal
      `,
			to_remember:
				'«&nbsp;*C’est en «&nbsp;rendant compte&nbsp;» de son action que le collaborateur «&nbsp;se rendra compte&nbsp;» et capitalisera des enseignements*&nbsp;»',
			tags:
				'conduire, Conduire, debrief, Debrief, débrief, Débrief, débriefing, Débriefing, debriefing, Debriefing, développer, Développer, developper, Developper, compétence, Compétence, competence, Competence, compétences, Compétences, competences, Competences, enseignement, Enseignement, enseignements, Enseignements, ecoute, Ecoute, ecouter, Ecouter, resultat, Resultat, résultat, Résultat, valoriser, Valoriser, positif, Positif, positive, Positive, capitaliser, Capitaliser, reforumler, Reformuler, collaborateur, Collaborateur',
		},
		{
			id: 13,
			name: 'Comment traiter une erreur ?',
			cat_id: 3,
			order: 3,
			why: 'Pour tirer un enseignement qui évite la reproduction de l’erreur',
			why_img: 'fiche_3_13_1.svg',
			how: `
      1. Faire un constat factuel des conséquences de l’erreur
      2. Reconnaitre éventuellement sa part de responsabilité : «&nbsp;*Sans doute que je ne t’ai pas assez expliqué ce point*&nbsp;»
      3. Annoncer clairement l’objectif de l’entretien : «&nbsp;*Trouver une solution et non sanctionner*&nbsp;»
      4. Faire raconter pour donner au collaborateur l’énergie de la remise en question
      5. Reformuler les causes : «&nbsp;*Si je comprends bien cela vient du fait que…*&nbsp;»
      6. Aider le collaborateur à trouver une solution : «&nbsp;*Comment peut-on faire pour corriger ?*&nbsp;»
      7. Valider la solution et programmer un débriefing de sa mise en œuvre
      `,
			to_remember:
				'«&nbsp;*La problématique de la gestion de l’erreur consiste à analyser les causes pour trouver une solution et non à chercher un coupable*&nbsp;»',
			tags:
				'traiter, Traiter, traité, Traité, erreur, Erreur, enseignement, Enseignement, enseignements, Enseignements, constat, Constat, factuel, Factuel, objectif, Objectif, solution, Solution, solutions, Solutions, débriefing, Débriefing, debrief, Debrief, debriefing, Debriefing, responsabilité, Responsabilité, responsabilite, Responsabilite',
		},
		{
			id: 14,
			name: 'Comment annoncer une mauvaise nouvelle ?',
			cat_id: 4,
			order: 4,
			why: 'Pour favoriser l’acceptation de la nouvelle',
			why_img: 'bad_news.jpg',
			how: `
      1. Rappeler le contexte de l’entreprise ou les raisons qui ont conduits à la décision
      2. Prendre une précaution oratoire : «&nbsp;*Ce que j’ai à t’annoncer n’est pas facile à entendre et pas facile à dire non plus*&nbsp;»
      3. Annoncer la décision en l’argumentant
      4. Marquer un silence pour permettre à l’autre de s’exprimer
      5. Ecouter la réaction du collaborateur
      6. Reconnaître le ressenti du collaborateur : «&nbsp;*Je comprends que…*&nbsp;»
      7. Expliquer les étapes suivantes ou clôturer l’entretien`,
			to_remember:
				'«&nbsp;*Annoncer une mauvaise nouvelle de manière respectueuse c’est préparer l’interlocuteur à la recevoir*&nbsp;»',
			tags:
				'annoncer, Annoncer, mauvaise, Mauvaise, nouvelle, Nouvelle, nouvel, Nouvel, acceptation, Acceptation, favoriser, Favoriser, contexte, Contexte, decision, Decision, décision, Décision, réaction, Réaction, reaction, Reaction, entretien, Entretien',
		},
		{
			id: 15,
			name: 'Comment construire des règles de vie avec l’équipe ?',
			cat_id: 1,
			order: 5,
			why: 'Pour fédérer autour de règles claires et partagées',
			why_img: 'team_life.jpg',
			how: `
      1. Organiser une réunion avec l’équipe
      2. Rappeler l’importance de partager des règles pour le fonctionnement d’une équipe
      3. Faire lister les comportements gagnants dans le travail
      4. Faire lister les comportements gênants dans le travail
      5. Faire des rapprochements et choisir les comportements les plus importants
      6. Ecrire pour chaque comportement choisi une règle précise
      `,
			to_remember:
				'«&nbsp;*La cohésion repose sur le partage des règles connues et expliquées*&nbsp;»',
			tags:
				'construire, Construire, règle, Règle, règles, Règles, regles, Règles, regles, Regles, vie, Vie, équipe, Equipe, fédérer, Fédérer, federer, Federer, féderer, Féderer, fedérer, Fedérer, réunion, Réunion, reunion, Reunion, comportement, Comportement, comportements, Comportements, important, Important, cohesion, Cohesion, equipe, Equipe, équipe',
		},
		{
			id: 16,
			name: 'Comment gérer un conflit ?',
			cat_id: 4,
			order: 3,
			why:
				'Pour renforcer la cohésion et éviter que le conflit ne dégénère et n’impacte l’équipe.',
			why_img: 'conflict.jpg',
			contents: [
				{
					title:
						'Recueillir des faits objectifs en recevant chaque collaborateur en individuel',
				},
				{
					title:
						'Identifier la principale émotion ressentie (colère, déception, frustration…) par chacun d’entre eux',
				},
				{
					title:
						'Déterminer les conséquences du conflit sur l’équipe et le client',
				},
				{
					title:
						'Identifier une solution : arbitrage, solution technique, règle du jeu',
				},
				{
					title:
						'Convoquer les deux collaborateurs en conflit pour une réunion spécifique  :',
					content: `
          1. Jouer un rôle de médiateur et préciser la règle du jeu  : «&nbsp;*Je vais vous écouter l’un après l’autre, je vous demande de vous adresser uniquement à moi. Pendant que l’un s’exprime, l’autre l’écoute sans interrompre, ensuite ce sera son tour*&nbsp;»
          2. Donner la parole aux collaborateurs à tour de rôle
          3. Reformuler les propos de l’un et de l’autre (et notamment l’émotion ressentie par chacun) sans prise de position.
          4. Invoquer sa part de responsabilité si nécessaire pour minimiser la tension  : «&nbsp;*J’aurai sûrement du m’apercevoir de la tension entre vous avant*&nbsp;»
          5. Annoncer la décision prise (arbitrage, solution technique, règle du jeu)
          6. Demander aux collaborateurs leur validation de la solution
          7. Remercier les collaborateurs pour leur franchise
          `,
				},
			],
			to_remember:
				'«&nbsp;*Dans un conflit chacun a raison «&nbsp;dans son monde&nbsp;», le rôle du manager est d’aider les collaborateurs à «&nbsp;entendre&nbsp;» le monde de l’autre avant de trouver une solution*&nbsp;»',
			tags:
				'gérer, Gérer, gerer, Gérer, conflit, Conflit, cohesion, Cohesion, éviter, Eviter, eviter, équipe, Equipe, fait, Fait, faits, Faits, solution, Solution, solutions, Solutions, médiateur, Médiateur, mediateur, Mediateur, responsabilité, Responsabilité, responsabilite, Responsabilite, propos, Propos, négatif, Négatif, negatif, Negatif, conséquence, Conséquence, consequence, Consequence',
		},
		{
			id: 17,
			name: 'Comment gérer une dérive ?',
			cat_id: 4,
			order: 1,
			why:
				'Pour signaler le hors-jeu et faire comprendre le caractère non négociable de la règle',
			why_img: 'fiche_4_17_1.svg',
			how: `
      1. Faire un constat factuel de la faute : «&nbsp;*J’ai vu que…*&nbsp;»
      2. Entendre les justifications sans relancer ni couper la parole
      3. Prendre en compte les justifications : «&nbsp;*Je comprends que…*&nbsp;»
      4. Rappeler la règle en faisant un lien avec les valeurs de l’entreprise
      `,
			to_remember:
				'«&nbsp;*L’entretien a pour objet de rappeler une règle et non polémiquer sur les causes de la dérive*&nbsp;»',
			tags:
				'gérer, Gérer, gerer, Gerer, dérive, Dérive, derive, Derive, hors-jeu, Hors-jeu, hors, Hors, jeu, Jeu, signaler, Signaler, constat, Constat, faute, Faute, justification, Justification, justifications, Justifications, règle, Règle, regle, Regle',
		},
		{
			id: 18,
			name: 'Comment conduire un recadrage ?',
			cat_id: 4,
			order: 2,
			why:
				'Pour (re)définir les exigences avec un collaborateur dont les dérives sont multiples.',
			why_img: 'reframing.jpg',
			how: `
      1. Préciser l’objectif de l’entretien: «&nbsp;*trouver une solution pour mieux fonctionner*&nbsp;»
      2. Présenter d’abord les points forts puis les comportements non acceptables
      3. Ecouter la version du collaborateur, relancer pour comprendre sans polémiquer
      4. Eventuellement reconnaître sa part de responsabilité et s’engager à faire évoluer ce que le collaborateur demande
      5. Redéfinir le cadre d’exigence : «&nbsp;*J’ai besoin que tu t’engages à respecter certaines exigences*&nbsp;»
      6. Demander au collaborateur de s’engager
      7. Prendre RDV pour faire le point 15 jours plus tard.
      `,
			to_remember:
				'«&nbsp;*Le recadrage consiste à redéfinir le contrat hiérarchique : droits et devoir de chacun*&nbsp;»',
			tags:
				'conduire, Conduire, recadrage, Recadrage, exigence, Exigence, exigences, Exigences, responsabilité, Responsabilité, responsabilite, Responsabilite, cadre, Cadre, exigence, Exigence',
		},
		{
			id: 19,
			name: 'Comment négocier avec un interlocuteur ?',
			cat_id: 4,
			order: 5,
			why: 'Pour obtenir un accord gagnant / gagnant',
			why_img: 'fiche_4_19_1.svg',
			how: `
      1. Expliquer sa demande en donnant du sens via les conséquences pour l’entreprise, le client
      2. Ecouter les contraintes de l’autre, creuser pour bien comprendre
      3. Reformuler les contraintes de l’autre en étant factuel
      4. Exprimer sa compréhension de ses contraintes et rappeler ses propres enjeux (si possible en les connectant aux siens)
      5. Lui demander ce qu’il propose ou lui proposer une solution
      6. Conclure par la décision prise
      `,
			to_remember:
				'«&nbsp;*Négocier c’est tenir compte des contraintes de l’autre pour faire 2 gagnants*&nbsp;»',
			tags:
				'négocier, Négocier, negocier, Negocier, interlocuteur, Interlocuteur, accord, Accord, demande, Demande, sens, Sens, conséquence, Conséquence, consequence, Consequence, recouter, Ecouter, contrainte, Contrainte, contraintes, Contraintes, solution, Solution, solutions, Solutions, gagnant, Gagnant, décision, Décision, decision, Decision',
		},
	];
	private _keys: FicheKey[] = [
		{
			id: 1,
			cat_id: 1,
			name: 'Mobiliser l’équipe',
			img: 'fiche_key_1_1_0.svg',
			content: `1. L’annonce d’un changement déclenche des réactions d’abord émotionnelles ensuite rationnelles
      2. Chacun pèse en fonction de son niveau d’énergie et de ses représentations le ratio effort / résultat que le changement induit
      3. L’accompagnement du changement consiste moins à « réduire les résistances » qu’à créer les conditions de l’adhésion.`,
		},
		{
			id: 2,
			cat_id: 2,
			name: 'Motiver les collaborateurs',
			img: 'fiche_key_3_3_0.svg',
			content: `1. L’écart entre la confiance et le doute calibre le niveau d’énergie de l’individu.
      2. La prise de conscience est la conséquence de la prise de confiance : les messages positifs doivent toujours être adressés en premier pour créer les conditions de la remise en question.
      3. La capacité à se projeter ou se remettre d’un échec dépend pour partie de l’écart entre les images positives qu’à l’individu de lui-même : l’estime de soi et ses complexes`,
		},
		{
			id: 3,
			cat_id: 3,
			name: 'Coacher les collaborateurs',
			img: 'fiche_key_2_2_0.svg',
			content: `1. Le coaching consiste à développer progressivement l’autonomie du collaborateur à mesure que ses compétences augmentent.
      2. Le mode de coaching doit s’adapter aux différentes phases de l’apprentissage : d’un mode directif vers un mode participatif puis enfin délégatif.
      3. La phase la plus difficile (de débutant à technicien) où le ratio « effort/résultat » est le plus dégradé nécessite de nombreux encouragements.`,
		},
		{
			id: 4,
			cat_id: 4,
			name: 'Gérer les situations complexes',
			img: 'fiche_key_4_4_0.svg',
			content: `1. Le management consiste à dire même les choses les plus difficiles de manière «&nbsp;entendable&nbsp;».
      2. La principale difficulté consiste dans la canalisation de nos «&nbsp;émotions négatives&nbsp;» pour éviter de se laisser aller à un défoulement inefficace.
      3. Raisonner sa communication consiste à se poser la question de l’objectif afin de trouver la bonne attitude pour l’atteindre.`,
		},
	];
	


	private keys: FicheKey[] = [
		{
			id: 1,
			cat_id: 1,
			name: 'Mobiliser l’équipe',
			img: 'fiche_key_1_1_0.svg',
			content: `1. L’annonce d’un changement déclenche des réactions d’abord émotionnelles ensuite rationnelles
      2. Chacun pèse en fonction de son niveau d’énergie et de ses représentations le ratio effort / résultat que le changement induit
      3. L’accompagnement du changement consiste moins à « réduire les résistances » qu’à créer les conditions de l’adhésion.`,
		},
		{
			id: 2,
			cat_id: 2,
			name: 'Motiver les collaborateurs',
			img: 'fiche_key_3_3_0.svg',
			content: `1. L’écart entre la confiance et le doute calibre le niveau d’énergie de l’individu.
      2. La prise de conscience est la conséquence de la prise de confiance : les messages positifs doivent toujours être adressés en premier pour créer les conditions de la remise en question.
      3. La capacité à se projeter ou se remettre d’un échec dépend pour partie de l’écart entre les images positives qu’à l’individu de lui-même : l’estime de soi et ses complexes`,
		},
		{
			id: 3,
			cat_id: 3,
			name: 'Coacher les collaborateurs',
			img: 'fiche_key_2_2_0.svg',
			content: `1. Le coaching consiste à développer progressivement l’autonomie du collaborateur à mesure que ses compétences augmentent.
      2. Le mode de coaching doit s’adapter aux différentes phases de l’apprentissage : d’un mode directif vers un mode participatif puis enfin délégatif.
      3. La phase la plus difficile (de débutant à technicien) où le ratio « effort/résultat » est le plus dégradé nécessite de nombreux encouragements.`,
		},
		{
			id: 4,
			cat_id: 4,
			name: 'Gérer les situations complexes',
			img: 'fiche_key_4_4_0.svg',
			content: `1. Le management consiste à dire même les choses les plus difficiles de manière «&nbsp;entendable&nbsp;».
      2. La principale difficulté consiste dans la canalisation de nos «&nbsp;émotions négatives&nbsp;» pour éviter de se laisser aller à un défoulement inefficace.
      3. Raisonner sa communication consiste à se poser la question de l’objectif afin de trouver la bonne attitude pour l’atteindre.`,
		},
	];
	


	constructor() {
		this._init_fiches();
	}

	/* PUBLIC */
	public getFicheById(id: number): Fiche {
		return this.fiches[id];
	}

	public getFichesByCatId(id: number): Fiche[] {
		let tmp = [];

		let i = this.fiches.length;
		while (i--) {
			if (this.fiches[i].cat_id == id) {
				tmp.push(this.fiches[i]);
			}
		}

		return tmp.sort((a, b) => {
			return a.order - b.order;
		});
	}

	public getFicheBySearch(text: string): Fiche[] {
		let tmp = [];

		let i = this.fiches.length;
		while (i--) {
			if (this.fiches[i].tags.indexOf(text) != -1) {
				tmp.push(this.fiches[i]);
			}
		}

		return tmp;
	}

	public getRandomFiche(): Fiche {
		let min = Math.ceil(0);
		let max = Math.floor(this.fiches.length);
		let rand = Math.floor(Math.random() * (max - min)) + min;
		return this.fiches[rand];
	}

	public getFicheKeyById(id: number): Fiche {
		return this.fiches[id];
	}
/*
	public getFicheKeyByCatId({ id }: { id: number; }) {
		let i = this._keys.length;
		while (i--) {
			if (this._keys[i].cat_id == id) {
				return 1
			//return this._keys[i];
			}
		}
	}
*/
	/*  PRIVATE */


	private _init_fiches(): void {
		console.log(this.fiches); 
		

	}



	private _init_fichesOLD(): void {
		console.log(this.fiches); /*
		let c1 = this.fiches.length;

		while (c1--) {
			if (this.fiches[c1].why_img) {
				this.fiches[c1].why_img = 'assets/fiches/' + this.fiches[c1].why_img;
			}
			if (this.fiches[c1].contents) {
				let c2 = this.fiches[c1].contents.length;

				while (c2--) {
					if (this.fiches[c1].contents[c2].content) {
						this.fiches[c1].contents[c2].content = this._trim(
							this.fiches[c1].contents[c2].content
						);
					}
					if (this.fiches[c1].contents[c2].img) {
						this.fiches[c1].contents[c2].img =
							'assets/fiches/' + this.fiches[c1].contents[c2].img;
					}
				}
			}
			if (this.fiches[c1].how) {
				this.fiches[c1].how = this._trim(this.fiches[c1].how);
			}
		
		}

		let c3 = this._keys.length;

		while (c3--) {
			if (this._keys[c3].content) {
				this._keys[c3].content = this._trim(this._keys[c3].content);
			}
			if (this._keys[c3].img) {
				this._keys[c3].img = 'assets/fiches/' + this._keys[c3].img;
			}
		}
		*/
	}

	private _trim(text: string): string {
		let tmp = text.split('\n');

		let i = tmp.length;
		while (--i) {
			tmp[i] = tmp[i].trim();
		}

		return tmp.join('\n');
	}
}
