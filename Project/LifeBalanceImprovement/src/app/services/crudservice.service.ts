import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CRUDServiceService {

  constructor(private firestore: AngularFirestore) {}

  create_Entries(record,Table) {
    return this.firestore.collection(Table).add(record);
  }

  read_Entries(Table) {
    return this.firestore.collection(Table).snapshotChanges();
  }

  update_Entries(recordID,record,Table){
    this.firestore.doc(Table+'/' + recordID).update(record);
  }

  delete_Entries(record_id,Table) {
    this.firestore.doc(Table+'/' + record_id).delete();
  }
}
