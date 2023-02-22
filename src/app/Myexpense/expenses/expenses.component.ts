import { Component, OnInit } from '@angular/core';
import { Expense } from '../../expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
}) 
export class ExpensesComponent implements OnInit {
  
  expenses:Expense[];
  constructor() {
    this.expenses = [
      {
        sno: 1,
        title: 'this is title',
        desc: 'description',
        active: true
      },
      {
        sno: 2,
        title: 'this is title2',
        desc: 'description',
        active: true
      },
      {
        sno: 3,
        title: 'this is title3',
        desc: 'description',
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }
  deleteExpense(expense: Expense){
    console.log(expense); 
    const index = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1)
  }

}
