/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */


type Registration = {
    studentID: string;
    studentName: string;
    fullName: string;
    gradeLevel: string;
    courseID: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: string;
    dateregistration:string;
    isPaymentCompleted: boolean;

};

const registration1: Registration = {
    studentID: "nano215",
    studentName:  "budi",
    fullName: "budi santoso",
    gradeLevel: "X",
    courseID: "542323870",
    courseTitle: "Belajar Dasar Pemrograman Python",
    instructorName: "agus hariyanto",
    totalLearningHours: "30 hours",
    dateregistration: "05 mei 2010",
    isPaymentCompleted: true,
};




const registration2: Registration = {
    studentID: "nano216",
    studentName: "sari",
    fullName: "sari putri dewi",
    gradeLevel: "XI",
    courseID: "542323800",
    courseTitle: "basic css",
    instructorName: "bagus hariyadi",
    totalLearningHours: "25 hours",
    dateregistration: "6 april 2009",
    isPaymentCompleted: false,
};


const registration3: Registration = {
    studentID: "nano217",
    studentName: "dewi",
    fullName: "dewi kartika ika",
    gradeLevel: "XI",
    courseID: "542323900",
    courseTitle: "basic js",
    instructorName: "bima eka putra",
    totalLearningHours: "25 hours",
    dateregistration: "12 februari 2009",
    isPaymentCompleted: true,
};

console.log("Registration 1:", registration1);
console.log("Status 1:", registration1.isPaymentCompleted ? "lunas" : "tidak lunas");

console.log("Registration 2:", registration2);
console.log("Status 2:", registration2.isPaymentCompleted ? "lunas" : "tidak lunas");

console.log("Registration 3:", registration3);
console.log("Status 3:", registration3.isPaymentCompleted ? "lunas" : "tidak lunas");




