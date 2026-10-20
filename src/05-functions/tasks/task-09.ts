/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
interface Patient {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
}

const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];



function countTotalPatients(patients: Patient[]): number {
    return patients.length;
}


function countAdmittedPatients(patients: Patient[]): number {
    let count = 0;

    for (const patient of patients) {
        if (patient.admitted) {
            count++;
        }
    }

    return count;
}


function countDischargedPatients(patients: Patient[]): number {
    let count = 0;

    for (const patient of patients) {
        if (!patient.admitted) {
            count++;
        }
    }

    return count;
}


function countPatientsByDepartment(
    patients: Patient[],
    department: string
): number {
    let count = 0;

    for (const patient of patients) {
        if (patient.department === department) {
            count++;
        }
    }

    return count;
}


function findHighestBill(patients: Patient[]): number {
    let highest = patients[0].bill;

    for (const patient of patients) {
        if (patient.bill > highest) {
            highest = patient.bill;
        }
    }

    return highest;
}


function findLowestBill(patients: Patient[]): number {
    let lowest = patients[0].bill;

    for (const patient of patients) {
        if (patient.bill < lowest) {
            lowest = patient.bill;
        }
    }

    return lowest;
}


function calculateTotalRevenue(patients: Patient[]): number {
    let total = 0;

    for (const patient of patients) {
        total += patient.bill;
    }

    return total;
}


function calculateAverageBill(patients: Patient[]): number {
    const totalRevenue = calculateTotalRevenue(patients);
    return totalRevenue / patients.length;
}


function getAdmittedPatientNames(patients: Patient[]): string[] {
    const admittedNames: string[] = [];

    for (const patient of patients) {
        if (patient.admitted) {
            admittedNames.push(patient.name);
        }
    }

    return admittedNames;
}


function printHospitalReport(): void {
    const totalPatients = countTotalPatients(patients);
    const admittedPatients = countAdmittedPatients(patients);
    const dischargedPatients = countDischargedPatients(patients);

    const pediatricsPatients =
        countPatientsByDepartment(patients, "Pediatrics");
    const cardiologyPatients =
        countPatientsByDepartment(patients, "Cardiology");
    const orthopedicsPatients =
        countPatientsByDepartment(patients, "Orthopedics");

    const highestBill = findHighestBill(patients);
    const lowestBill = findLowestBill(patients);
    const totalRevenue = calculateTotalRevenue(patients);
    const averageBill = calculateAverageBill(patients);

    const admittedNames = getAdmittedPatientNames(patients);

    console.log("===== HOSPITAL DAILY REPORT =====");
    console.log(`Total Patients: ${totalPatients}`);
    console.log(`Admitted Patients: ${admittedPatients}`);
    console.log(`Discharged Patients: ${dischargedPatients}`);

    console.log("\nPatients by Department:");
    console.log(`Pediatrics: ${pediatricsPatients}`);
    console.log(`Cardiology: ${cardiologyPatients}`);
    console.log(`Orthopedics: ${orthopedicsPatients}`);

    console.log(`\nHighest Bill: Rp${highestBill}`);
    console.log(`Lowest Bill: Rp${lowestBill}`);
    console.log(`Average Bill: Rp${averageBill.toFixed(2)}`);
    console.log(`Total Revenue: Rp${totalRevenue}`);

    console.log("\nAdmitted Patients:");
    console.log(admittedNames.join(", "));
}

printHospitalReport();