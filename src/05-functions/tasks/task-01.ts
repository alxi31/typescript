/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

function calculateFinalGrade(assignmentScore: number, midtermScore: number, finalExamScore: number): number {
  const finalGrade = (assignmentScore * 0.3) + (midtermScore * 0.3) + (finalExamScore * 0.4);
  return finalGrade;
}

const alyaFinalGrade = calculateFinalGrade(85, 80, 92);
const budiFinalGrade = calculateFinalGrade(78, 75, 81);
const citraFinalGrade = calculateFinalGrade(90, 88, 95);

console.log(`Alya's final grade: ${alyaFinalGrade}`);
console.log(`Budi's final grade: ${budiFinalGrade}`);
console.log(`Citra's final grade: ${citraFinalGrade}`);
