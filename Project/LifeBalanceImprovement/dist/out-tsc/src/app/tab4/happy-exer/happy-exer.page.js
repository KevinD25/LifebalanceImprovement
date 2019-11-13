import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CRUDServiceService } from '../../services/crudservice.service';
let HappyExerPage = class HappyExerPage {
    constructor(crudService) {
        this.crudService = crudService;
    }
    ngOnInit() {
        this.crudService.read_Entries("HappyEx").subscribe(data => {
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
        this.crudService.create_Entries(record, "HappyEx").then(resp => {
            this.Exercise = "";
            console.log(resp);
        })
            .catch(error => {
            console.log(error);
        });
    }
};
HappyExerPage = tslib_1.__decorate([
    Component({
        selector: 'app-happy-exer',
        templateUrl: './happy-exer.page.html',
        styleUrls: ['./happy-exer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CRUDServiceService])
], HappyExerPage);
export { HappyExerPage };
//# sourceMappingURL=happy-exer.page.js.map