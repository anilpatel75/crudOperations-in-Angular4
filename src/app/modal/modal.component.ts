
import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() dataCreate = new EventEmitter<{id:String,name:String, Age:String}>();
  @Output() dataEdit = new EventEmitter<{id:String,name:String, Age:String}>();
  @Output() deleteYes = new EventEmitter<any>();
    @Input() newdata;
    @Input() newdata2;
    @Input() newdata3;
    @Input() newEditdata;
        newid:string = "";
        newName:String="";
        newAge:String = "";
        editid:string=""
        editname:string=""
        editAge:string =""

  constructor() {}

  ngOnInit() {
  } 
       // this function is for check validity
     onClose()
          { 
            if(this.newdata == true)
            {
              this.newdata=  false;
            }
            else{
              this.newdata=  true;
            }
          }
      onAdd()
      {
        this.newdata =false;
       this.dataCreate.emit({id:this.newid,name:this.newName, Age:this.newAge});
       }
        deleteEntry()
          { 
            this.deleteYes.emit();
            this.newdata2 = false;
          }
        onEdit()
        {
         this.newdata3 = false;
        }
        onDeleteno()
        {
          this.newdata2 = false;
        }
        onCloseEdit()
        {
          this.newdata3 = false;
        }
            // emit the eventfor the edit entry
        onOpenEdit(id,name,age)
        {
          this.editid = id;
          this.editname = name;
          this.editAge = age;
          this.dataEdit.emit({id:this.editid,name:this.editname, Age:this.editAge});
          this.newdata3 = false;
        }
}
