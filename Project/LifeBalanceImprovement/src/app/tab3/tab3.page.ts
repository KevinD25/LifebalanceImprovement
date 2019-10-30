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
  Notes : any;
  GoalTitle: string;
  GoalNotes: string;
  TodayDay : number;
  TodayMonth : number;
  TodayYear:number;
  TodayDate : string;
  NoteHolder : string[] = [];
  NoteIDHolder : string[] = [];
  NoteRecord : any = [];

 
  constructor(private crudService: CRUDServiceService,public alertController: AlertController) 
  {

    this.NoteRecord = {
      GoalID : "",Note : ""
    }
   
    
  }
 
  ngOnInit() {
    this.TodayDay = new Date().getDate();
    this.TodayMonth = new Date().getMonth();
    this.TodayMonth = this.TodayMonth+1;

    this.TodayYear = new Date().getFullYear();
    

    this.TodayDate =this.TodayYear + "-" + this.TodayMonth + "-" + this.TodayDay;
    this.crudService.read_Entries("Goals").subscribe(data => {
      this.Goals = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          GoalTitle: e.payload.doc.data()['GoalTitle'],
          GoalDate: e.payload.doc.data()['GoalDate'],
          Notes : this.NoteHolder,
          NoteIDs : this.NoteIDHolder,
        };
      })
    });
   
    this.crudService.read_Entries("Notes").subscribe(data2 => {

        this.Notes = data2.map(E => {
          return{
            id: E.payload.doc.id,
            GoalID : E.payload.doc.data()['GoalID'],
            Note : E.payload.doc.data()['Note']
  
          };
  
        });

        console.log(this.Notes);
  
        this.Goals.forEach(elemGoal => {
          this.Notes.forEach(elemNote => {
            if(elemNote.GoalID == elemGoal.id)
            {
              
              this.NoteIDHolder.push(elemNote.id);
             this.NoteHolder.push(elemNote.Note);
            }
          });
          
          elemGoal.Notes = this.NoteHolder;
          elemGoal.NoteIDs = this.NoteIDHolder;
          console.log(this.NoteIDHolder);
          console.log(this.NoteHolder);
          this.NoteIDHolder = [];
          this.NoteHolder = [];

        });
        console.log(this.Goals);
        
      })
    
    



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

  AddNote(ID : string)
  {
    this.NoteRecord['GoalID'] = ID;
    this.AlertNote();
  }
  RemoveNote(I,J)
{
 
  this.crudService.delete_Entries(this.Goals[I].NoteIDs[J],"Notes");
  
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



  async AlertNote() {
    const alert = await this.alertController.create({
      header: 'Voer in',
      subHeader : 'Vul hier uw notitie in',
      inputs: [
        {
          name: 'Note',
          type: 'text',
          placeholder: 'Notes'
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
            if(data.Note != null)
            {
              this.NoteRecord["Note"] = data.Note;
              this.crudService.create_Entries(this.NoteRecord,"Notes");
              this.NoteHolder = [];
              this.NoteIDHolder = [];
              this.Goals.forEach(elemGoal => {
                
                elemGoal.Notes = this.NoteHolder;
      
              });
            }
            
          }
        }
      ]
    });
    await alert.present();
  }
}
