import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../../services/crudservice.service';

@Component({
  selector: 'app-happy-exer',
  templateUrl: './happy-exer.page.html',
  styleUrls: ['./happy-exer.page.scss'],
})
export class HappyExerPage  implements OnInit{

  
  Exercises : any;
  Exercise :string;
  TodaysExercise : string;
  constructor(private crudService: CRUDServiceService) { }
 
  ngOnInit() 
  {
    
    
    this.crudService.read_Users("HappyEx").subscribe(data => {
 
      this.Exercises = data.map(e => {
        return {
          ExerciseText: e.payload.doc.data()['Exercise'],
          
        };
      })
      this.TodaysExercise = this.Exercises[Math.floor(Math.random() * this.Exercises.length)].ExerciseText;
      console.log(this.Exercises);
 
    });
    
  }
  CreateRecord() {
    let record = {};
    record['Exercise'] = this.Exercise;
   
    this.crudService.create_NewUser(record,"HappyEx").then(resp => {
      this.Exercise = "";
     
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
 
}
