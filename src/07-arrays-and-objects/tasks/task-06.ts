/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];


const findBorrowingsByStudent = (studentName: string) => {
    return borrowings.filter(borrowing => borrowing.student === studentName);
}

const findBookInfoByBorrowing = (borrowing: { student: string; bookId: number; days: number }) => {
    return books.find(book => book.id === borrowing.bookId);
}

const findStudentsByBookCategory = (category: string) => {
    const bookIds = books.filter(book => book.category === category).map(book => book.id);
    return borrowings.filter(borrowing => bookIds.includes(borrowing.bookId)).map(borrowing => borrowing.student);
}

const calculateTotalBorrowings = () => {
    return borrowings.length;
}

const calculateAverageBorrowingDuration = () => {
    const totalDays = borrowings.reduce((sum, borrowing) => sum + borrowing.days, 0);
    return totalDays / borrowings.length;
}

const findStudentsWithLongBorrowings = (days: number) => {
    return borrowings.filter(borrowing => borrowing.days > days).map(borrowing => borrowing.student);
}

console.log("1. Borrowing transactions for Andi:", findBorrowingsByStudent("Andi"));
console.log("2. Book information for each borrowing transaction:", borrowings.map(findBookInfoByBorrowing));
console.log("3. Students who borrowed programming books:", findStudentsByBookCategory("Programming"));
console.log("4. Total number of borrowing transactions:", calculateTotalBorrowings());
console.log("5. Average borrowing duration:", calculateAverageBorrowingDuration());
console.log("6. Students who borrowed books for more than 7 days:", findStudentsWithLongBorrowings(7));

