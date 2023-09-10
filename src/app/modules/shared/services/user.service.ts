import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fireStoreService:AngularFirestore) { }

  createData(users: {
    userEmail:string,
    userName:string,
    userPhone:string,
    userAddress:string
  }) {
    return new Promise<any>((resolve, reject) => {
      this.fireStoreService.collection('user')
        .add(users)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    });
  }
}
