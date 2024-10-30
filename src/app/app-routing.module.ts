import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


const routes: Routes = [

  



{path:'myproject' ,loadChildren:()=>import('./myproject/myproject.module').then((m)=>m.MyprojectModule)}
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

