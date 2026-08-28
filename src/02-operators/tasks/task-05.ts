/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */


const studentName = "Alya Putri";
const gpa = 3.89;
const familyIncome = 4200000;
const competitionCount = 4;
const hasDisciplinaryRecord = false; 
const documentsComplete = true; 

const SCHOLARSHIP_AMOUNT = 12000000;
const TOTAL_BUDGET = 500000000;


const meetsGPA = gpa >= 3.75;
const meetsIncome = familyIncome < 5000000;
const meetsCompetition = competitionCount >= 3;
const meetsDiscipline = hasDisciplinaryRecord === false;
const meetsDocuments = documentsComplete === true;


const isQualified = 
    meetsGPA && 
    meetsIncome && 
    meetsCompetition && 
    meetsDiscipline && 
    meetsDocuments;


const scholarshipAmount = isQualified ? SCHOLARSHIP_AMOUNT : 0;


const remainingBudget = TOTAL_BUDGET - scholarshipAmount;


console.log("=== Hasil Seleksi Beasiswa ===");
console.log("Nama Mahasiswa:", studentName);
console.log("--- Detail Evaluasi Syarat ---");
console.log("GPA memenuhi syarat (>= 3.75):", meetsGPA);
console.log("Pendapatan memenuhi syarat (< Rp5.000.000):", meetsIncome);
console.log("Jumlah kompetisi memenuhi syarat (>= 3):", meetsCompetition);
console.log("Tidak ada pelanggaran disiplin:", meetsDiscipline);
console.log("Dokumen lengkap:", meetsDocuments);
console.log("------------------------------");
console.log("Status Kelulusan Beasiswa:", isQualified ? "DITERIMA" : "TIDAK DITERIMA");
console.log("Jumlah Beasiswa: Rp" + scholarshipAmount.toLocaleString("id-ID"));
console.log("Sisa Anggaran Beasiswa: Rp" + remainingBudget.toLocaleString("id-ID"));