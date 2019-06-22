import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WonderWomansPage } from './wonder-womans.page';

const routes: Routes = [
  {
    path: '',
    component: WonderWomansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WonderWomansPage]
})
export class WonderWomansPageModule {}
