import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Myproject } from 'src/app/Myproject';


@Component({
  selector: 'app-add-myproject',
  templateUrl: './add-myproject.component.html',
  styleUrls: ['./add-myproject.component.css']
})
export class AddMyprojectComponent implements OnInit {
    title !:string ;
    desc  !:string;
    @Output() myprojectAdd: EventEmitter<Myproject>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   const myproject = {
   sno:8,
   title:this.title,
   desc:this.desc,
   active:true,
   }
   this.myprojectAdd.emit(myproject);

  }
}
