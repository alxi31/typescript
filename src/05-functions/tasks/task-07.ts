/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(){
let activeCount = 0;
for (const student of students) {
  if (student.active) {
    activeCount++;
  }
}
return activeCount;
}

function countInactiveStudents(){
let inactiveCount = 0;
for (const student of students) {
  if (!student.active) {
    inactiveCount++;
  }
}
return inactiveCount;
}

function countStudentsByMajor(major: string){
  let count = 0;
  for (const student of students) {
    if (student.major === major) {
      count++;
    }
  }
  return count;
}

function printEnrollmentReport(){
  console.log("Enrollment Report:");
  console.log(`Total Students: ${students.length}`);
  console.log(`Active Students: ${countActiveStudents()}`);
  console.log(`Inactive Students: ${countInactiveStudents()}`);
  console.log(`Software Engineering Students: ${countStudentsByMajor("Software Engineering")}`);
  console.log(`Networking Students: ${countStudentsByMajor("Networking")}`);
  console.log(`Multimedia Students: ${countStudentsByMajor("Multimedia")}`);
}

printEnrollmentReport();