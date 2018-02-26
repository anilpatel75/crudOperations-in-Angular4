import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      allow1:boolean = false;
      allow2:boolean = false;
      allow3:boolean = false;
      deleteIndex:number;
      editIndex:any;
      editnewIndex:number;
   constructor(){}
   
next= [
            {
              id:"1234",
              name:"anil",
              Age:"19"
             },
            {
              id:"5678",
              name:"jaimin",
              Age:"44"
            },
            {
            id:"1434",
            name:"vikalp",
            Age:"76"
            },
            {
            id:"4343",
            name:"bhargav",
            Age:"23"
            },
            {
            id:"7777",
            name:"vishl",
            Age:"33"
            }];
  
            //On click function is for the AddEntry
            onClick(){
              if( this.allow1 == false)
              {    
                    this.allow2 = false;
                    this.allow3 = false;
                  this.allow1 =true;
               }else{
                 this.allow1 = false;
              }
            }   //oncreate is for the adding new entry in the table
              oncreate(newData){
              this.next.push(newData);
              return  this.next.slice(0);
            }
                //used for the index delete
                ondelAlert(index)
                {
                  if(this.allow2 == false)
                  {
                    this.allow2 = true;
                    this.allow1 = false;
                    this.allow3 = false;
                  }else{
                    this.allow2 = false;
                  }
                 this.deleteIndex = index;
                } // button info for the edit button
              onEditListAdded(index)
              {
                if(this.allow3 == false)
                {     this.allow2 = false;
                      this.allow1 = false;
                      this.allow3 = true
                   this.editIndex = index;
                }else
                {
                  this.allow3 = false;
                }
              }
              // this function is for the delete the entry
              onDeleteOneEntry()
              {
                this.next.splice(this.deleteIndex,1);
                return this.next.slice(0);
              }
              // this function is use for the update new list
              dataEdited(editdata)
              {
                console.log(this.editnewIndex)
                this.next.splice(this.editnewIndex,1,editdata);
              } //function for the edit index
              indexForEdit(index)
              {
              this.editnewIndex = index;
             }

}
