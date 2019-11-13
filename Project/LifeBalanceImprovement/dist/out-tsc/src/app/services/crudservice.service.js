import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
let CRUDServiceService = class CRUDServiceService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    create_Entries(record, Table) {
        return this.firestore.collection(Table).add(record);
    }
    read_Entries(Table) {
        return this.firestore.collection(Table).snapshotChanges();
    }
    update_Entries(recordID, record, Table) {
        this.firestore.doc(Table + '/' + recordID).update(record);
    }
    delete_Entries(record_id, Table) {
        this.firestore.doc(Table + '/' + record_id).delete();
    }
};
CRUDServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], CRUDServiceService);
export { CRUDServiceService };
//# sourceMappingURL=crudservice.service.js.map