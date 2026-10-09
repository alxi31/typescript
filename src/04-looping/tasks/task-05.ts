// /**
//  * A programming competition stores participants' scores in the following array.
//  * 
//  * 
//  * Competition Rules
//  * Gold Medal : score ≥ 95
//  * Silver Medal : score 85–94
//  * Bronze Medal : score 75–84
//  * No Medal : below 75
//  * 
//  * 
//  * Student Tasks
//  * Using a loop, calculate:
//  * - Number of Gold Medal winners
//  * - Number of Silver Medal winners
//  * - Number of Bronze Medal winners
//  * - Number of students without medals
//  * - Average competition score
//  */

// import { PassThrough } from "stream";

// const scores = [
//     98, 76, 85, 62, 91,
//     73, 88, 59, 100, 81,
//     67, 79, 94, 83, 71,
//     96, 65, 87, 74, 90
// ];
// let goldCount = 0;
// let silverCount = 0;
// let bronzeCount = 0;
// let noMedalCount = 0;
// let totalScore = 0;

// for (let i = 0; i < scores.length; i++) {
//     const score = scores[i];
//     totalScore += score;
    
//     if (score >= 95) {
//         console.log("Gold Medal");
//         goldCount++
//     } else if (score >= 85) {
//         console.log("Silver Medal");
//         silverCount++
//     } else if (score >= 75) {
//         console.log("Bronze Medal");
//         bronzeCount++
//     } else {
//         console.log("No Medal");
//         noMedalCount++
//     }
// }

let goldCount = 0;
let silverCount = 0;
let bronzeCount = 0;
let noMedalCount = 0;
let totalScore = 0;
 
for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    totalScore += score;
 
    if (score >= 95) {
        console.log(`Participant ${i + 1}: ${score} -> Gold Medal`);
        goldCount++;
    } else if (score >= 85) {
        console.log(`Participant ${i + 1}: ${score} -> Silver Medal`);
        silverCount++;
    } else if (score >= 75) {
        console.log(`Participant ${i + 1}: ${score} -> Bronze Medal`);
        bronzeCount++;
    } else {
        console.log(`Participant ${i + 1}: ${score} -> No Medal`);
        noMedalCount++;
    }
}
 
const average = totalScore / scores.length;
 
console.log("\n=== Competition Summary ===");
console.log(`Gold Medal   : ${goldCount}`);
console.log(`Silver Medal : ${silverCount}`);
console.log(`Bronze Medal : ${bronzeCount}`);
console.log(`No Medal     : ${noMedalCount}`);
console.log(`Average score: ${average.toFixed(2)}`);
