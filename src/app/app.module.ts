import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprojectComponent } from './Mycomponent/myproject/myproject.component';
import { MyprojectItemComponent } from './Mycomponent/myproject-item/myproject-item.component';
import { AddMyprojectComponent } from './Mycomponent/add-myproject/add-myproject.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MyprojectComponent,
    MyprojectItemComponent,
    AddMyprojectComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
