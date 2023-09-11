import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FicheProvider } from 'src/providers/fiche/fiche';
import { CategorieProvider } from 'src/providers/categorie/categorie';

//import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
//import { HttpLink } from 'apollo-angular/http';
//import { HttpClientModule } from '@angular/common/http';
//import { InMemoryCache } from '@apollo/client/core';

import { HttpClientModule  } from "@angular/common/http";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AuthProvider } from 'src/providers/auth/auth';
@NgModule({

  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    ApolloModule,
    AppRoutingModule,
     BrowserModule,  
     HttpClientModule  
    // HttpLinkModule,
    // HttpClientModule
    // ApolloModule,
	  ],


    providers: [
      AuthProvider,
      FicheProvider,
      CategorieProvider,
      {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link:  httpLink.create({
            uri: 'https://backend.solar-management.adelios.fr/graphql',
            //  headers: {
             //   Authorization: `Bearer ${localStorage.getItem('token')}`
            //  }
          })
        };
      },
      deps: [HttpLink]
      },
      { 
       provide: RouteReuseStrategy, 
       useClass: IonicRouteStrategy
      }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
