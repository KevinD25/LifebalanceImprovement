import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../services/crudservice.service';
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  Goals: any;
  GoalTitle: string;
  GoalNotes: string;
  TodayDay : number;
  TodayMonth : number;
  TodayYear:number;
  INPUTGOAL : string;
  INPUTDATE: Date;
  TodayDate : string;

 
  constructor(private crudService: CRUDServiceService,public alertController: AlertController) { }
 
  ngOnInit() {
    this.TodayDay = new Date().getDate();
    this.TodayMonth = new Date().getMonth();
    this.TodayMonth = this.TodayMonth+1;

    this.TodayYear = new Date().getFullYear();
    console.log(this.TodayDay);
    console.log(this.TodayMonth);
    console.log(this.TodayYear);

    this.TodayDate =this.TodayYear + "-" + this.TodayMonth + "-" + this.TodayDay;
    console.log(this.TodayDate);
    this.crudService.read_Entries("Goals").subscribe(data => {
 
      this.Goals = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          GoalId : e.payload.doc.data()['ID'],
          GoalTitle: e.payload.doc.data()['GoalTitle'],
          GoalNotes: e.payload.doc.data()['GoalDate'],
          
        };
        
      })
      
      console.log(this.Goals);
 
    });
  }
 
  
 

  createRecord(Goal : string, Date : Date) {
    let record = {};
    record['GoalTitle'] = Goal;
    record['GoalDate'] = Date;
   

    this.crudService.create_Entries(record,"Goals").then(resp => {
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

    
  
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['GoalTitle'] = recordRow.EditGoal;
    record['GoalDate'] = recordRow.EditNotes;
    this.crudService.update_Entries(recordRow.id, record,"Goals");
    recordRow.isEdit = false;
  }

  

 
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Voer in',
      subHeader : 'Welk Doel wilt u bereiken tegen wanneer?',
      inputs: [
        {
          name: 'Goal',
          type: 'text',
          placeholder: 'Goal'
        },
        {
         name: 'Date',
         type: 'date',
         min : this.TodayDate,
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
            this.createRecord(data.Goal,data.Date);
            
          }
        }
      ]
    });
    await alert.present();
  }
}
