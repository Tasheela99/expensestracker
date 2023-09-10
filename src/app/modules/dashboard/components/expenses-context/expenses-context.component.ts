import {Component, OnInit} from '@angular/core';
import {PageTitleService} from "../../../shared/services/page-title.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Expenses from "../../dto/Expenses";
import {ExpenseService} from "../../../shared/services/expense.service";

@Component({
  selector: 'app-expenses-context',
  templateUrl: './expenses-context.component.html',
  styleUrls: ['./expenses-context.component.scss']
})
export class ExpensesContextComponent implements OnInit {
  selected!: string;

  expensesForm = new FormGroup({
    expenseName: new FormControl('', [Validators.required]),
    expenseType: new FormControl('', [Validators.required]),
    expenseDescription: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    expenseDate: new FormControl('', [Validators.required]),
    expenseAmount: new FormControl('', [Validators.required, Validators.nullValidator!]),
    expenseImage: new FormControl('', [Validators.required])
  });

  constructor(private titleService: PageTitleService, private expenseService:ExpenseService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Expenses');
  }

  submitExpensesForm() {
    if (this.expensesForm.valid) {
      console.log(this.expensesForm);
      let expense = new Expenses(
        this.expensesForm.get('expenseName')?.value!,
        this.expensesForm.get('expenseType')?.value!,
        this.expensesForm.get('expenseDescription')?.value!,
        this.expensesForm.get('expenseDate')?.value!,
        Number(this.expensesForm.get('expenseAmount')?.value!),
        this.expensesForm.get('expenseImage')?.value!
      );

      const expenseData = expense.toPlainObject();

      this.expenseService.createData(expenseData).then(() => {
        console.log("Saved!");
      });
    }
  }

}
