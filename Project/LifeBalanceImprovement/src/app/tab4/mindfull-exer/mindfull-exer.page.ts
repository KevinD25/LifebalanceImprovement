import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../../services/crudservice.service';

@Component({
  selector: 'app-mindfull-exer',
  templateUrl: './mindfull-exer.page.html',
  styleUrls: ['./mindfull-exer.page.scss'],
})
export class MindfullExerPage implements OnInit{

  
  Exercises : any;
  Exercise :string;
  TodaysExercise : string;
  constructor(private crudService: CRUDServiceService) { }
 
  ngOnInit() 
  {
    
    
    this.crudService.read_Entries("MindfullEx").subscribe(data => {
 
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
   
    this.crudService.create_Entries(record,"MindfullEx").then(resp => {
      this.Exercise = "";
     
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
 
}
