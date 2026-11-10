/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const calculateStudentScore = (studentSubmission: { student: string; answers: { questionId: number; answer: string }[] }) => {
    let score = 0;
    studentSubmission.answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.correctAnswer === answer.answer) {
            score += 25;
        }
    });
    return score;
}

const determineStudentCorrectAnswers = (studentSubmission: { student: string; answers: { questionId: number; answer: string }[] }) => {
    let correct = 0;
    let wrong = 0;
    studentSubmission.answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.correctAnswer === answer.answer) {
            correct++;
        } else {
            wrong++;
        }
    });
    return { student: studentSubmission.student, correct, wrong };
}

const calculateAverageScoreByCategory = () => {
    const categoryScores: { [category: string]: { totalScore: number; count: number } } = {};
    submissions.forEach(submission => {
        submission.answers.forEach(answer => {
            const question = questions.find(q => q.id === answer.questionId);
            if (question) {
                if (!categoryScores[question.category]) {
                    categoryScores[question.category] = { totalScore: 0, count: 0 };
                }
                if (question.correctAnswer === answer.answer) {
                    categoryScores[question.category].totalScore += 25;
                }
                categoryScores[question.category].count++;
            }
        });
    });
    const averageScores: { [category: string]: number } = {};
    for (const category in categoryScores) {
        averageScores[category] = categoryScores[category].totalScore / categoryScores[category].count;
    }
    return averageScores;
}

const generateFinalExamAnalytics = () => {
    const totalStudents = submissions.length;
    const scores = submissions.map(calculateStudentScore);
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / totalStudents;
    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);
    const passedStudents = scores.filter(score => score >= 70).length;
    const failedStudents = totalStudents - passedStudents;
    const passRate = (passedStudents / totalStudents) * 100;
    const analytics = {
        totalStudents,
        averageScore,
        highestScore,
        lowestScore,
        passedStudents,
        failedStudents,
        passRate,
    };
    return analytics;
}

console.log("1. Student scores:", submissions.map(submission => ({ student: submission.student, score: calculateStudentScore(submission) })));
console.log("2. Student correct answers:", submissions.map(determineStudentCorrectAnswers));
console.log("3. Average score by category:", calculateAverageScoreByCategory());
console.log("4. Final exam analytics:", generateFinalExamAnalytics());

