import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'; 
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,

  ],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class LayoutModule { }
