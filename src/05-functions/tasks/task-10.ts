/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments: Enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];




function getTotalEnrollments(data: Enrollment[]): number {
    return data.length;
}


function getCompletedEnrollments(data: Enrollment[]): number {
    let count = 0;

    for (const enrollment of data) {
        if (enrollment.completed) {
            count++;
        }
    }

    return count;
}


function getIncompleteEnrollments(data: Enrollment[]): number {
    return getTotalEnrollments(data) -
        getCompletedEnrollments(data);
}

function getCompletionPercentage(data: Enrollment[]): number {
    return (
        getCompletedEnrollments(data) /
        getTotalEnrollments(data)
    ) * 100;
}




function getHighestScore(data: Enrollment[]): number {
    let highest = data[0].score;

    for (const enrollment of data) {
        if (enrollment.score > highest) {
            highest = enrollment.score;
        }
    }

    return highest;
}


function getLowestScore(data: Enrollment[]): number {
    let lowest = data[0].score;

    for (const enrollment of data) {
        if (enrollment.score < lowest) {
            lowest = enrollment.score;
        }
    }

    return lowest;
}


function getTotalScore(data: Enrollment[]): number {
    let total = 0;

    for (const enrollment of data) {
        total += enrollment.score;
    }

    return total;
}


function getAverageScore(data: Enrollment[]): number {
    return getTotalScore(data) /
        getTotalEnrollments(data);
}


function getPassingStudents(
    data: Enrollment[],
    passingScore: number
): string[] {
    const students: string[] = [];

    for (const enrollment of data) {
        if (enrollment.score >= passingScore) {
            students.push(enrollment.student);
        }
    }

    return students;
}



function getStudentsByCourse(
    data: Enrollment[],
    course: string
): number {
    let count = 0;

    for (const enrollment of data) {
        if (enrollment.course === course) {
            count++;
        }
    }

    return count;
}


function getAverageScoreByCourse(
    data: Enrollment[],
    course: string
): number {
    let totalScore = 0;
    let totalStudents = 0;

    for (const enrollment of data) {
        if (enrollment.course === course) {
            totalScore += enrollment.score;
            totalStudents++;
        }
    }

    return totalScore / totalStudents;
}




function getTotalLearningHours(
    data: Enrollment[]
): number {
    let totalHours = 0;

    for (const enrollment of data) {
        totalHours += enrollment.duration;
    }

    return totalHours;
}


function getAverageLearningDuration(
    data: Enrollment[]
): number {
    return getTotalLearningHours(data) /
        getTotalEnrollments(data);
}




function printCourseStatistics(): void {
    const courses = ["TypeScript", "Database", "Backend"];

    console.log("\n=== COURSE STATISTICS ===");

    for (const course of courses) {
        console.log(
            `${course} Students: ${getStudentsByCourse(
                enrollments,
                course
            )}`
        );

        console.log(
            `${course} Average Score: ${getAverageScoreByCourse(
                enrollments,
                course
            ).toFixed(2)}`
        );

        console.log("-------------------");
    }
}


function printLearningDashboard(): void {

    console.log("===== ONLINE LEARNING DASHBOARD =====");

    console.log("\n=== COMPLETION STATISTICS ===");
    console.log(
        `Total Enrollments: ${getTotalEnrollments(enrollments)}`
    );
    console.log(
        `Completed Enrollments: ${getCompletedEnrollments(enrollments)}`
    );
    console.log(
        `Incomplete Enrollments: ${getIncompleteEnrollments(enrollments)}`
    );
    console.log(
        `Completion Percentage: ${getCompletionPercentage(enrollments).toFixed(2)}%`
    );

    console.log("\n=== ACADEMIC STATISTICS ===");
    console.log(
        `Highest Score: ${getHighestScore(enrollments)}`
    );
    console.log(
        `Lowest Score: ${getLowestScore(enrollments)}`
    );
    console.log(
        `Average Score: ${getAverageScore(enrollments).toFixed(2)}`
    );
    console.log(
        `Passing Students: ${getPassingStudents(
            enrollments,
            75
        ).join(", ")}`
    );

    printCourseStatistics();

    console.log("\n=== LEARNING STATISTICS ===");
    console.log(
        `Total Learning Hours: ${getTotalLearningHours(enrollments)}`
    );
    console.log(
        `Average Learning Duration: ${getAverageLearningDuration(
            enrollments
        ).toFixed(2)} hours`
    );
}

// Run Program
printLearningDashboard();
