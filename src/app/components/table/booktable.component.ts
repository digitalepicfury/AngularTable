import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { BookService } from 'src/book.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'book-table',
  styleUrls: ['booktable.component.css'],
  templateUrl: 'booktable.component.html',  
})
export class BookTable implements AfterViewInit {  
  displayedColumns: string[] = ['id', 'isbn', 'title', 'subtitle', 'author', 'year', 'publisher', 'pages', 'website'];  
  isLoading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Runs when component is constructed
  constructor(public bookService: BookService) {           
    // Initalize Loading to true
    this.isLoading = true;

    // Check if loading has completed and if so isLoading = false
    //TODO: There would be a better way with NgRx and Redux
    this.bookService.books.then(() => {       
       this.isLoading = false;       
    });
  }

  ngAfterViewInit() {
    //TODO: There would be a better way with NgRx and Redux
    this.bookService.books.then((dataSource) => {
      dataSource.paginator = this.paginator;
      dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    //TODO: There would be a better way with NgRx and Redux
    this.bookService.books.then((dataSource) => {
      const filterValue = (event.target as HTMLInputElement).value;
      dataSource.filter = filterValue.trim().toLowerCase();

      if (dataSource.paginator) {
        dataSource.paginator.firstPage();
      }
    });
    
    
  }
}