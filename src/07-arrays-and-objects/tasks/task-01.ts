/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

let studentNames = students.map(student => student.name);
let passedStudents = students.filter(student => student.score >= 70);
let top= students.find(student => student.score >=90)
let totalscore= 0


for (const student of students) {
    const score = student.score;
    totalscore += score;
}

const avgscore=totalscore/students.length

console.log(studentNames)
console.log(passedStudents)
console.log(top)
console.log('average: ' + avgscore)

