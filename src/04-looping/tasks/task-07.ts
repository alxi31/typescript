/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];


interface Student {
    name: string;
    present: boolean;
}
 
// Sample data: replace with the array given in your assignment
const students: Student[] = [
    { name: "Andi", present: true },
    { name: "Budi", present: true },
    { name: "Citra", present: false },
    { name: "Dewi", present: true },
    { name: "Eko", present: true },
    { name: "Fajar", present: false },
    { name: "Gita", present: true },
    { name: "Hadi", present: true },
    { name: "Indah", present: true },
    { name: "Joko", present: false },
    { name: "Kiki", present: true },
    { name: "Lina", present: true },
    { name: "Maya", present: true },
    { name: "Nanda", present: false },
    { name: "Oka", present: true },
    { name: "Putri", present: true },
    { name: "Rian", present: true },
    { name: "Sari", present: true },
    { name: "Tono", present: true },
    { name: "Wati", present: true }
];
 
let presentCount = 0;
let absentCount = 0;
const absentNames: string[] = [];
 
for (let i = 0; i < students.length; i++) {
    const student = students[i];
 
    if (student.present) {
        presentCount++;
    } else {
        absentCount++;
        absentNames.push(student.name);
    }
}
 
const attendancePercentage = (presentCount / students.length) * 100;
 
console.log("=== Attendance Report ===");
console.log(`Total students : ${students.length}`);
console.log(`Present        : ${presentCount}`);
console.log(`Absent         : ${absentCount}`);
console.log(`Absent students: ${absentNames.length > 0 ? absentNames.join(", ") : "-"}`);
console.log(`Attendance     : ${attendancePercentage.toFixed(2)}%`);