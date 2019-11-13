import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CRUDServiceService } from '../../services/crudservice.service';
let MindfullExerPage = class MindfullExerPage {
    constructor(crudService) {
        this.crudService = crudService;
    }
    ngOnInit() {
        this.crudService.read_Entries("MindfullEx").subscribe(data => {
            this.Exercises = data.map(e => {
                return {
                    ExerciseText: e.payload.doc.data()['Exercise'],
                };
            });
            this.TodaysExercise = this.Exercises[Math.floor(Math.random() * this.Exercises.length)].ExerciseText;
            console.log(this.Exercises);
        });
    }
    CreateRecord() {
        let record = {};
        record['Exercise'] = this.Exercise;
        this.crudService.create_Entries(record, "MindfullEx").then(resp => {
            this.Exercise = "";
            console.log(resp);
        })
            .catch(error => {
            console.log(error);
        });
    }
};
MindfullExerPage = tslib_1.__decorate([
    Component({
        selector: 'app-mindfull-exer',
        templateUrl: './mindfull-exer.page.html',
        styleUrls: ['./mindfull-exer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CRUDServiceService])
], MindfullExerPage);
export { MindfullExerPage };
//# sourceMappingURL=mindfull-exer.page.js.map