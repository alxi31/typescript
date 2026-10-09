/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */


const sales = [
	125000,
	350000,
	78000,
	910000,
	150000,
	420000,
	275000,
	99000,
	640000,
	18000
];

let totalRevenue = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let transactionsAbove300k = 0;

for (let i = 0; i < sales.length; i++) {
    const transaction = sales[i];
    totalRevenue += transaction;

    if (transaction > highestTransaction) {
        highestTransaction = transaction;
    }

    if (transaction < lowestTransaction) {
        lowestTransaction = transaction;
    }

    if (transaction >= 300000) {
        transactionsAbove300k++;
    }
}

const averageTransaction = totalRevenue / sales.length; 
console.log(`Total Sales Revenue: Rp${totalRevenue}`);
console.log(`Highest Transaction: Rp${highestTransaction}`);
console.log(`Lowest Transaction: Rp${lowestTransaction}`);
console.log(`Number of Transactions >= Rp300,000: ${transactionsAbove300k}`);
console.log(`Average Transaction Value: Rp${averageTransaction.toFixed(2)}`);
