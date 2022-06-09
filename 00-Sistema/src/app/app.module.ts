import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'primeng/accordion';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    TabMenuModule,
    MenuModule,
    InputTextModule,
    AccordionModule,
    CardModule,
    InputMaskModule,
    RouterModule


  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
