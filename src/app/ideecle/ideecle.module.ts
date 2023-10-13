import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeeclePageRoutingModule } from './ideecle-routing.module';

import { IdeeclePage } from './ideecle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeeclePageRoutingModule
  ],
  declarations: [IdeeclePage]
})
export class IdeeclePageModule {}
