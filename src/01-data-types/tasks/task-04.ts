/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};

const book1: Book = {
    isbn: "978-3-16-148410-0",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    totalPages: 180,
    category: "Fiction",
    isAvailable: true
};

const book2: Book = {
    isbn: "978-0-14-044913-6",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    totalPages: 430,
    category: "Classic Literature",
    isAvailable: false
};

const book3: Book = {
    isbn: "978-0-06-112008-4",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    totalPages: 281,
    category: "Fiction",
    isAvailable: true
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);