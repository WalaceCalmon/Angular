import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    SharedModuleModule,
    BrowserAnimationsModule
  ]
})
export class SharedModuleModule { }
