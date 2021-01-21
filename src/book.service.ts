export interface Book {
    id: number,
    isbn: string,
    title: string,
    subtitle: string,
    author: string,
    year: string,
    publisher: string,
    pages: number,
    description: string,
    website: string,
}

import { MatTableDataSource } from '@angular/material/table';
// TODO: Setup a Mock API and load from json file.
// import * as booksData from './books.json'; 

export class BookService {
    bookData: Book[] = [
        {
            "id": 1,
            "isbn": "9781593275846",
            "title": "Eloquent JavaScript, Second Edition",
            "subtitle": "A Modern Introduction to Programming",
            "author": "Marijn Haverbeke",
            "year": "2014",
            "publisher": "Penguin Random House",
            "pages": 472,
            "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
            "website": "http://eloquentjavascript.net/"
        },
        {
            "id": 2,
            "isbn": "9781449331818",
            "title": "Learning JavaScript Design Patterns",
            "subtitle": "A JavaScript and jQuery Developer's Guide",
            "author": "Addy Osmani",
            "year": "2012",
            "publisher": "HarperCollins",
            "pages": 254,
            "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
            "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
        },
        {
            "id": 3,
            "isbn": "9781449365035",
            "title": "Speaking JavaScript",
            "subtitle": "An In-Depth Guide for Programmers",
            "author": "Axel Rauschmayer",
            "year": "2014",
            "publisher": "Macmillian",
            "pages": 460,
            "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
            "website": "http://speakingjs.com/"
        },
        {
            "id": 4,
            "isbn": "9781491950296",
            "title": "Programming JavaScript Applications",
            "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
            "author": "Eric Elliott",
            "year": "2014",
            "publisher": "Macmillian",
            "pages": 254,
            "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
            "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
        },
        {
            "id": 5,
            "isbn": "9781593277574",
            "title": "Understanding ECMAScript 6",
            "subtitle": "The Definitive Guide for JavaScript Developers",
            "author": "Nicholas C. Zakas",
            "year": "2016",
            "publisher": "Penguin Random House",
            "pages": 352,
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
            "website": "https://leanpub.com/understandinges6/read"
        },
        {
            "id": 6,
            "isbn": "9781491904244",
            "title": "You Don't Know JS",
            "subtitle": "ES6 & Beyond",
            "author": "Kyle Simpson",
            "year": "2015",
            "publisher": "Simon & Schuster",
            "pages": 278,
            "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
            "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
        },
        {
            "id": 7,
            "isbn": "9781449325862",
            "title": "Git Pocket Guide",
            "subtitle": "A Working Introduction",
            "author": "Richard E. Silverman",
            "year": "2013",
            "publisher": "Hachette",
            "pages": 234,
            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
        },
        {
            "id": 8,
            "isbn": "9781449337711",
            "title": "Designing Evolvable Web APIs with ASP.NET",
            "subtitle": "Harnessing the Power of the Web",
            "author": "Glenn Block, et al.",
            "year": "2014",
            "publisher": "Simon & Schuster",
            "pages": 538,
            "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
            "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
        },
        {
            "id": 9,
            "isbn": "9781593279288",
            "title": "Python Crash Course",
            "subtitle": "A Hands-On, Project-Based Introduction to Programming",
            "author": "Eric Matthes",
            "year": "2019",
            "publisher": "Hachette",
            "pages": 346,
            "description": "Python Crash Course is the world's best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time.",
            "website": "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280"
        },
        {
            "id": 10,
            "isbn": "9781593279288",
            "title": "HTML5 and CSS3",
            "subtitle": "All-in-One For Dummies",
            "author": "Andy Harris",
            "year": "2014",
            "publisher": "Penguin Random House",
            "pages": 1104,
            "description": "HTML5 and CSS3 are essential tools for creating dynamic websites and boast updates and enhanced features that can make your websites even more effective and unique. This friendly, all-in-one guide covers everything you need to know about each of these technologies and their latest versions so that you can use them together. Building on the bestselling formats of the first two editions, this new edition teaches you the fundamentals of HTML5 and CSS3, and then presents ways for using them with JavaScript, MySQL, and Ajax to create websites that work.",
            "website": "https://www.amazon.com/HTML5-CSS3-All-One-Dummies"
        }
    ];

    books: Promise<MatTableDataSource<Book>> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new MatTableDataSource(this.bookData));
        }, 5000);
    });
    
    addBook(book: Book) {                
        // TODO: I realize there is a better way of handing this (ngrx and redux):
        this.books.then((books: MatTableDataSource<Book>) =>{
            this.books = new Promise((resolve, reject) => {            
                let bookData: Book[] = books.data;                

                bookData.push({id: bookData.length+1,...book});
                books.data = bookData;

                resolve(books);
            });
        });
    }
}