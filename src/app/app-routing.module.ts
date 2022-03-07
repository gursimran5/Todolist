import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponent/about/about.component';
import { MyprojectComponent } from './Mycomponent/myproject/myproject.component';

const routes: Routes = [
  { path: '', component: MyprojectComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
