import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './materials.module';

import { SideNavigation } from './components/sidenav/sidenav.component';
import { BookTable } from './components/table/booktable.component';
import { Toolbar } from './components/toolbar/toolbar.component';
import { AddBook } from './screens/addbook/addbook.component';
import { ViewBook } from './screens/viewbook/viewbooks.component';
import { AddBookFormDialog, DialogButton } from './components/addbookform/addbookformdialog.component';
 
import { BookService } from 'src/book.service';

@NgModule({
  declarations: [
    AppComponent, 
    SideNavigation,
    BookTable,
    Toolbar,
    AddBook,
    ViewBook,
    AddBookFormDialog,
    DialogButton
  ],
  imports: [        
    MaterialModule, 
    OverlayModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    ReactiveFormsModule    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}

 