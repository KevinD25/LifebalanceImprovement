import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../services/crudservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Goals: any;
  GoalTitle: string;
  GoalDescription: string;
  Check : Boolean;

 
  constructor(private crudService: CRUDServiceService) { }
 
  ngOnInit() {
    this.crudService.read_Entries("Goals").subscribe(data => {
 
      this.Goals = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          GoalTitle: e.payload.doc.data()['GoalTitle'],
          GoalDescription: e.payload.doc.data()['GoalDescription'],
          
        };
        
      })
      
      console.log(this.Goals);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['GoalTitle'] = this.GoalTitle;
    record['GoalDescription'] = " ";
    this.crudService.create_Entries(record,"Goals").then(resp => {
      this.GoalTitle = "";
      this.GoalDescription = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Entries(rowID,"Goals");
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditGoal = record.GoalTitle;
    record.EditDescription = record.GoalDescription;

    
    console.log(this.Check);
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['GoalTitle'] = recordRow.EditGoal;
    record['GoalDescription'] = recordRow.EditDescription;
    this.crudService.update_Entries(recordRow.id, record,"Goals");
    recordRow.isEdit = false;
  }

 
 
}
