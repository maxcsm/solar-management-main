"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2181],{2181:(M,l,o)=>{o.r(l),o.d(l,{CategoriePageModule:()=>P});var d=o(6733),p=o(2133),r=o(1359),s=o(7579),g=o(8239),t=o(7170),u=o(5155),m=o(6895);function f(e,a){if(1&e&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&e){const i=a.$implicit;t.xp6(1),t.Gre("cat",i.id,""),t.xp6(1),t.hij(" ",i.name," "),t.xp6(2),t.hij(" ",i.description,"")}}function C(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",16),t.NdJ("click",function(c){const _=t.CHM(i).$implicit,v=t.oxw();return t.KtG(v.go(c,_))}),t.TgZ(1,"h4"),t._uU(2),t.qZA()()}if(2&e){const i=a.$implicit;t.xp6(2),t.hij(" ",i.name," ")}}const x=[{path:"",component:(()=>{class e{constructor(i,n,c,h){this.router=i,this.route=n,this.categorie_provider=c,this.fiche_provider=h,this.id=null}ngOnInit(){this.route.params.subscribe(i=>{this.id=i.id,null==this.id?this.getCatgorieRandom():this.getCategorieByid()})}getCatgorieRandom(){this.posts=[this.categorie_provider.getRandomCategorie()],console.log(this.posts),this.alldata=this.posts,this.contents=this.posts[0].contents,this.idcat=this.posts[0].id,this.imagecat=this.posts[0].image,console.log(this.contents),this.getFichesByCat()}getCategorieByid(){this.posts=[this.categorie_provider.getCategorie(this.id)],this.alldata=this.posts,this.contents=this.posts[0].contents,this.idcat=this.posts[0].id,this.imagecat=this.posts[0].image,this.getFichesByCat()}getFichesByCat(){this.allfiches=this.fiche_provider.getFichesByCatId(this.idcat),console.log(this.allfiches)}go(i,n){var c=this;return(0,g.Z)(function*(){console.log(n.id),c.router.navigateByUrl("fiche/"+n.id)})()}goHome(){var i=this;return(0,g.Z)(function*(){i.router.navigateByUrl("/home")})()}goMenu(){var i=this;return(0,g.Z)(function*(){i.router.navigateByUrl("/menu")})()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(u.E),t.Y36(m.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-categorie"]],decls:22,vars:9,consts:[["mode","ios"],["src","assets/imgs/navbar/logo.svg","width","100px"],["slot","start"],["ion-button","","icon-only","","color","primary",3,"click"],["name","chevron-back-outline"],["slot","end"],["name","apps"],["padding",""],[1,"bloc_button","cat-padding"],[1,"button_cat"],["width","90","height","90",3,"src"],[1,"cat-container"],[4,"ngFor","ngForOf"],["inset","","lines","none"],[1,"ion-text-center","title-cat"],["class","ion-text-center list-cat",3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center","list-cat",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),t._UZ(3,"img",1),t.qZA(),t.TgZ(4,"ion-buttons",2)(5,"ion-button",3),t.NdJ("click",function(){return n.goHome()}),t._UZ(6,"ion-icon",4),t.qZA()(),t.TgZ(7,"ion-buttons",5)(8,"ion-button",3),t.NdJ("click",function(){return n.goMenu()}),t._UZ(9,"ion-icon",6),t.qZA()()()(),t.TgZ(10,"ion-content",7)(11,"div",8)(12,"div",9)(13,"div"),t._UZ(14,"img",10),t.qZA()()(),t.TgZ(15,"div",11),t.YNc(16,f,5,5,"div",12),t.TgZ(17,"ion-list",13)(18,"div",14)(19,"h1"),t._uU(20," les id\xe9es cl\xe9s "),t.qZA()(),t.YNc(21,C,3,1,"div",15),t.qZA()()()),2&i&&(t.xp6(13),t.Gre("circle_cat backcat",n.idcat,""),t.xp6(1),t.s9C("src",n.imagecat,t.LSH),t.xp6(2),t.Q6J("ngForOf",n.alldata),t.xp6(3),t.Gre("cat",n.idcat,""),t.xp6(2),t.Q6J("ngForOf",n.allfiches))},dependencies:[d.sg,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.q_,r.wd,r.sr],styles:[".cat-color[_ngcontent-%COMP%]{background-image:linear-gradient(127deg,rgb(148,241,255) 0%,rgb(61,212,185) 100%);border-radius:50%;width:1.15;height:1.15;display:flex;margin:0 auto;position:relative}.cat-color-mask[_ngcontent-%COMP%]{display:flex;height:50%;width:80%;position:absolute;z-index:1;left:50%;display:inline-block;width:120px;height:120px;border-radius:50%;background-color:#41d5cf;box-shadow:#9a9a9a}.cat-color-mask[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:auto;z-index:2;position:absolute;top:150px;transform:translate3d(-50%,-50%,0);max-width:70%;max-height:70%;background-color:#39d1b6}.cat-padding[_ngcontent-%COMP%]{padding-top:50px}.cat-container[_ngcontent-%COMP%]{position:relative}.cat-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-weight:400;text-transform:uppercase;letter-spacing:1px;font-size:.922rem;letter-spacing:.224rem}.cat-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;max-width:80%;display:block;margin:0 auto;color:#4a4a4a;font-size:1.1rem;line-height:1.4rem}.cat-container[_ngcontent-%COMP%]   .title-cat[_ngcontent-%COMP%]{background-color:#e6e6e6;text-transform:uppercase;border-top:1px solid rgba(57,209,182,.5)!important;height:50px}.cat-container[_ngcontent-%COMP%]   .list-cat[_ngcontent-%COMP%]{background-color:#e6e6e6;text-transform:uppercase;border-top:1px solid rgba(57,209,182,.5)!important;max-height:150px;min-height:50px}.cat-container[_ngcontent-%COMP%]   .list-cat[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;font-size:.822rem;letter-spacing:.024rem}.bloc_button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.bloc_button[_ngcontent-%COMP%]   .button_cat[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:120px;height:120px;border:2px solid #ffffff;border-radius:50%;position:relative;text-align:center;background-color:#41d5cf;background-image:radial-gradient(ellipse,#acf7f7,#41d5cf)}.bloc_button[_ngcontent-%COMP%]   .button_cat[_ngcontent-%COMP%]   .circle_cat[_ngcontent-%COMP%]{position:absolute;display:inline-block;width:100px;height:100px;border-radius:50%;box-shadow:#9a9a9a}.bloc_button[_ngcontent-%COMP%]   .button_cat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:45px;font-family:Cervo;font-size:.5rem;font-weight:100;text-transform:uppercase;letter-spacing:.348rem;color:#41d5cf;z-index:7}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(x),s.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,p.u5,r.Pc,b]}),e})()}}]);