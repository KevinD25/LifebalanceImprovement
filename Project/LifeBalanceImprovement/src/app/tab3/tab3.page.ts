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
  Today : Date;
  test : string;

 
  constructor(private crudService: CRUDServiceService,public alertController: AlertController) { }
 
  ngOnInit() {
    this.Today = new Date();
    console.log(this.Today);
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
 

  createRecord(Goal : string, Date : Date) {
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
      header: 'Voer in',
      subHeader : 'Welk Doel wilt u bereiken tegen wanneer?',
      inputs: [
        {
          name: 'Goal:',
          type: 'text',
          placeholder: 'Goal'
        },
        {
         name: 'Date',
         type: 'date',
         min: '2019-03-01',
         max: '2020-01-12'
         }
      
       
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            console.log(data);
            this.test = JSON.stringify(data);
            console.log();
            
          }
        }
      ]
    });
    await alert.present();
  }
}
