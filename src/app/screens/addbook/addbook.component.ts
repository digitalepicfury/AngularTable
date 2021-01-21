import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/book.service';

interface Publisher {
  value: string;
  viewValue: string;
}

/**
 * TODO: Yes, I realize this is a duplicate having addBookFor on a page and a modal (dialog)
 */
@Component({
  selector: 'AddBook',
  styleUrls: ['addbook.component.css'],
  templateUrl: 'addbook.component.html',
})

export class AddBook implements OnInit {
  addBookForm: FormGroup;    

  constructor(private bookService: BookService) {    
    
  }  
  
  publishers: Publisher[] = [
    { value: 'Penguin Random House', viewValue: 'Penguin Random House' },
    { value: 'HarperCollins', viewValue: 'HarperCollins' },
    { value: 'Simon & Schuster', viewValue: 'Simon & Schuster'},
    { value: 'Hachette', viewValue: 'Hachette' },
    { value: 'Macmillan', viewValue: 'Macmillan' }
  ];

  ngOnInit(): void {
    this.addBookForm = new FormGroup({      
      'isbn': new FormControl('', Validators.pattern('^[0-9]*$')),
      'title': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
      'subtitle': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
      'author': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
      'year': new FormControl('', Validators.pattern('^[0-9]*$')),
      'publisher': new FormControl(''),
      'pages': new FormControl('', Validators.pattern('^[0-9]*$')),
      'description': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
      'website': new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
    });
  }

  onSubmit() {    
    this.bookService.addBook(this.addBookForm.value);
    alert("Book has successfully been added!");
    this.addBookForm.reset();    
  }
}