import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
     @Input() data;
     @Output() deleteData = new EventEmitter<any>();
     @Output() dele = new EventEmitter<number>();
     @Output() editindex = new EventEmitter<number>();
     @Output() editItemList  = new EventEmitter<any>();
        
         constructor() { }
            ngOnInit() {}
  // button for the delete entry
  deletePopup(index)
  { 
    this.dele.emit(index);
  } 
  // button for the edit entry
   onEditList(editdata ,index)
  { 
    this.editItemList.emit(editdata);
    this.editindex.emit(index)
  
    console.log(index)
  }

}
