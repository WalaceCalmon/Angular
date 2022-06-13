import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContatoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ContatoComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
