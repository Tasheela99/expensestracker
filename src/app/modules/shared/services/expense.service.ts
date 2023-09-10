import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import Expenses from "../../dashboard/dto/Expenses";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private fireStoreService: AngularFirestore) {
  }

  generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  }


  createData(expense: {
    expenseType: string;
    expenseAmount: number;
    expenseImage: string;
    expenseDescription: string;
    expense: string;
    expenseDate: string
  }) {
    return new Promise<any>((resolve, reject) => {

      const randomId = this.generateRandomId(6);
      const createdId = 'EXPNO-' + randomId;

      const expenses = {
        ...expense,
        id: createdId
      };

      this.fireStoreService.collection('expense')
        .add(expenses)
        .then(response => {
          console.log(response);
          resolve(response.id);
        }, error => {
          console.log(error);
        });
    });
  }

  findAllData() {
    return this.fireStoreService.collection('expense')
      .snapshotChanges();
  }

  deleteData(id: any) {
    return this.fireStoreService.collection('expense')
      .doc(id)
      .delete();
  }

  findData(id: any) {
    return this.fireStoreService.collection('expense')
      .doc(id)
      .valueChanges();
  }

  updateData(expenses: {
    expenseType: string;
    expenseAmount: number;
    expenseImage: string;
    expenseDescription: string;
    expense: string;
    expenseDate: string
  }) {
    return this.fireStoreService.collection('expense')
      .doc(expenses.expense)
      .update({
        expenseType: expenses.expenseType,
        expenseDescription: expenses.expenseDescription,
        expenseDate: expenses.expenseDate,
        expenseAmount: expenses.expenseAmount,
        expenseImage: expenses.expenseImage,
      });
  }


}
