import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './Myexpense/expenses/expenses.component';
import { ExpenseItemComponent } from './Myexpense/expense-item/expense-item.component';
import { AddExpenseComponent } from './Myexpense/add-expense/add-expense.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    AddExpenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
