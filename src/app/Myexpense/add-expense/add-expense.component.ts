import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Expense } from 'src/app/expense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  title: string
  desc: string
  @Output() expenseAdd : EventEmitter<Expense> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const expense = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.expenseAdd.emit(expense);
  }

}
