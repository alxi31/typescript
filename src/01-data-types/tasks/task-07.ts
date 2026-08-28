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
    studentName: string;
    fullName: string;
    gradeLevel: string;
    courseID: number;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: string;
    dateregistration:string;
    isPaymentCompleted: boolean;

}

const registration1: Registration = {
    studentName:  "banu",
    fullName: "banu setyo budi",
    gradeLevel: "x",
    courseID: "542323870",
    courseTitle: "learn technic cook",
    instructorName: "agus hariyanto",
    totalLearningHours: "30 hours",
    dateregistration: "05 mei 2010",
    isPaymentCompleted: true,
}




const registration2: Registration = {
    studentName:  "banu",
    fullName: "banu setyo budi",
    gradeLevel: "x",
    courseID: "542323870",
    courseTitle: "learn technic cook",
    instructorName: "agus hariyanto",
    totalLearningHours: "30 hours",
}

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);


