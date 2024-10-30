import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{} from 'ngx-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
//import {DemoMaterialModule} from './material-module';
import {MatIconModule} from '@angular/material/icon';
import { PipePipe } from './pipe.pipe';
import { HeaderComponent } from './myproject/header/header.component';
import { FooterComponent } from './myproject/footer/footer.component';
import { ContentComponent } from './myproject/content/content.component';





@NgModule({
  declarations: [
    AppComponent,
   
    PipePipe,
    HeaderComponent,
    FooterComponent,
    
    ContentComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
   
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
   
    MatButtonModule,
    MatFormFieldModule,
   MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule   ,
      
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

