import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from 'src/book.service';

interface Publisher {
  value: string;
  viewValue: string;
}

/**
* TODO: Yes, I realize this is a duplicate having addBookForm on a page and a modal (dialog)
 */
@Component({
  selector: 'add-book-form',
  styleUrls: ['addbookformdialog.component.css'],
  templateUrl: 'addbookformdialog.component.html',
})

export class AddBookFormDialog implements OnInit {  
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
    console.log(this.addBookForm.value);
    this.bookService.addBook(this.addBookForm.value);
    alert("Book has successfully been added!");
    this.addBookForm.reset();
  }
}

@Component({
  selector: 'dialog-button',
  templateUrl: 'addbookformdialog.button.component.html',
})
export class DialogButton {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddBookFormDialog);

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log(`Dialog result: ${result}`);
    // });
  }
}