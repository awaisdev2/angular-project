import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from 'src/app/expense';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {

  @Input() expense: any;
  @Output() expenseDelete: EventEmitter<Expense> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(expense: Expense){
    this.expenseDelete.emit(expense);
    console.log('triggered')
  }

}
