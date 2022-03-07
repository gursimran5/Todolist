import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Myproject } from 'src/app/Myproject';


@Component({
  selector: 'app-myproject-item',
  templateUrl: './myproject-item.component.html',
  styleUrls: ['./myproject-item.component.css']
})
export class MyprojectItemComponent implements OnInit {
 @Input()
  myproject!: Myproject;
  @Output() myprojectDelete: EventEmitter<Myproject>= new EventEmitter();
  @Output() myprojectCheckbox: EventEmitter<Myproject>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(myproject: Myproject){
    this.myprojectDelete.emit(myproject);
    console.log("onclick has been triggered");
    
  }
  onCheckboxClick(myproject: Myproject ){
    console.log(myproject)
    this.myprojectCheckbox.emit(myproject);
    console.log(myproject)
  }
}
