import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBook } from './screens/addbook/addbook.component';
import { ViewBook } from './screens/viewbook/viewbooks.component';

const routes: Routes = [  
  { path: '', component: ViewBook },
  { path: 'view-books', component: ViewBook },
  { path: 'add-book', component: AddBook },
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
 