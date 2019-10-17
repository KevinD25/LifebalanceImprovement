import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../services/crudservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Users: any;
  UserName: string;
  UserAge: number;
  UserEmail: string;
 
  constructor(private crudService: CRUDServiceService) { }
 
  ngOnInit() {
    this.crudService.read_Users("Users").subscribe(data => {
 
      this.Users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.Users);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['Name'] = this.UserName;
    record['Age'] = this.UserAge;
    record['Address'] = this.UserEmail;
    this.crudService.create_NewUser(record,"Users").then(resp => {
      this.UserName = "";
      this.UserAge = undefined;
      this.UserEmail = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Users(rowID,"Users");
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Users(recordRow.id, record,"Users");
    recordRow.isEdit = false;
  }
 
 
}
