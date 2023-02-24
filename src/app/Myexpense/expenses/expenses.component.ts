import { Component, OnInit } from '@angular/core';
import { Expense } from '../../expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
}) 
export class ExpensesComponent implements OnInit {
  
  localItem: string;
  expenses:Expense[];
  constructor() {
    this.localItem = localStorage.getItem("expenses");
    if(this.localItem == null){
      this.expenses = [  ];
    }
    else{
      this.expenses = JSON.parse(this.localItem);
  }
   }

  ngOnInit(): void {
  }
  deleteExpense(expense: Expense){
    console.log(expense); 
    const index = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }
  addExpense(expense: Expense){ 
    console.log(expense); 
    this.expenses.push(expense)
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

}
