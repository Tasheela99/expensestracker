export default class Expenses{

  constructor(
    public expense:string,
    public expenseType:string,
    public expenseDescription:string,
    public expenseDate:string,
    public expenseAmount:number,
    public expenseImage:string
  ) {}

  toPlainObject() {
    return {
      expense: this.expense,
      expenseType: this.expenseType,
      expenseDescription: this.expenseDescription,
      expenseDate: this.expenseDate,
      expenseAmount: this.expenseAmount,
      expenseImage: this.expenseImage,
    };
  }

}
