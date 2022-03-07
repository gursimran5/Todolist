import { Component, OnInit } from '@angular/core';
import {Myproject} from  "../../Myproject";


@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {
      localItem !: string;
      myprojects!:Myproject[] ;

  constructor() {
     this.localItem = localStorage.getItem("myprojects") as string;
     if(this.localItem ==  null ){
     this.myprojects=[];
     }
     else{
       this.myprojects= JSON.parse(this.localItem);
     }
  }

  ngOnInit(): void {
  }
 deleteMyproject(myproject:Myproject)
 {
  console.log(myproject);
  const index = this.myprojects.indexOf(myproject);
  this.myprojects.splice(index,1);
  localStorage.setItem("myprojects",JSON.stringify(this.myprojects));
 }


 addMyproject(myproject:Myproject)
 {
  console.log(myproject);
  this.myprojects.push(myproject);
  localStorage.setItem("myprojects",JSON.stringify(this.myprojects))
 }

 
 toggleMyproject(myproject:Myproject)
 {
  const index = this.myprojects.indexOf(myproject);
  this.myprojects[index].active = !this.myprojects[index].active;
  
  localStorage.setItem("myprojects",JSON.stringify(this.myprojects));
 }

}
function Input() {
  throw new Error('Function not implemented.');
}

