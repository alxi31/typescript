/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */


type Applicant = {
    name: string;
    monthlyIncome: number;
    creditScore: number;
    existingDebt: number;
    isPermanentEmployee: boolean;
};

const applicant: Applicant = {
    name: "Andi Wijaya",
    monthlyIncome: 10000000,
    creditScore: 725,
    existingDebt: 2500000,
    isPermanentEmployee: true
};

if (applicant.monthlyIncome >= 8000000 && applicant.creditScore >= 700) {
    if (applicant.existingDebt <= 0.3 * applicant.monthlyIncome && applicant.isPermanentEmployee) {
        console.log("Loan Approved");
    } else {
        console.log("Manual Review");
    }
} else {
    console.log("Loan Rejected");
}