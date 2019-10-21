import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../services/crudservice.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Goals: any;
  GoalTitle: string;
  GoalNotes: string;
  Check : Boolean;

 
  constructor(private crudService: CRUDServiceService,public alertController: AlertController) { }
 
  ngOnInit() {
    this.crudService.read_Entries("Goals").subscribe(data => {
 
      this.Goals = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          GoalTitle: e.payload.doc.data()['GoalTitle'],
          GoalNotes: e.payload.doc.data()['GoalNotes'],
          
        };
        
      })
      
      console.log(this.Goals);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['GoalTitle'] = this.GoalTitle;
    if(this.GoalNotes == null)
    {
      record['GoalNotes'] = " ";
    }
    else
    {
       record['GoalNotes'] = this.GoalNotes;
    }
   

    this.crudService.create_Entries(record,"Goals").then(resp => {
      this.GoalTitle = "";
      this.GoalNotes = "";
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
    record.EditNotes = record.GoalNotes;

    
    console.log(this.Check);
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['GoalTitle'] = recordRow.EditGoal;
    record['GoalNotes'] = recordRow.EditNotes;
    this.crudService.update_Entries(recordRow.id, record,"Goals");
    recordRow.isEdit = false;
  }

  

 
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
}
