/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const calculateAverageScore = (employee: { name: string; department: string; projects: { name: string; score: number }[] }) => {
    const totalScore = employee.projects.reduce((sum, project) => sum + project.score, 0);
    return totalScore / employee.projects.length;
}

const getEmployeesWithAverageScoreAbove = (threshold: number) => {  
    const result: { name: string; averageScore: number }[] = [];
    employees.forEach(employee => {
        const averageScore = calculateAverageScore(employee);
        if (averageScore > threshold) {
            result.push({ name: employee.name, averageScore });
        }
    });
    return result;
}

const getEmployeesWithProjectScoreBelow = (threshold: number) => {
    return employees.filter(employee => employee.projects.some(project => project.score < threshold)).map(employee => employee.name);
}

console.log("1. Average score for each employee:", employees.map(employee => ({ name: employee.name, averageScore: calculateAverageScore(employee) })));
console.log("2. Employees with average score above 85:", getEmployeesWithAverageScoreAbove(85));
console.log("3. Employees with at least one project score below 80:", getEmployeesWithProjectScoreBelow(80));