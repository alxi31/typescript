/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let totalSales = 0;
  for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
  }
  return totalSales;
}

function findHighestTransaction(sales: number[]): number {
  if (sales.length === 0) return 0;

  let highestTransaction: number = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] > highestTransaction) {
      highestTransaction = sales[i];
    }
  }
  return highestTransaction;
}

function findLowestTransaction(sales: number[]): number {
  if (sales.length === 0) return 0;

  let lowestTransaction: number = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] < lowestTransaction) {
      lowestTransaction = sales[i];
    }
  }
  return lowestTransaction;
}

function calculateAverageSale(sales: number[]): number {
  if (sales.length === 0) return 0;

  let averageSale = 0;
  for (let i = 0; i < sales.length; i++) {
    averageSale += sales[i];
  }
  return averageSale / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let largeTransaction = 0;
  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > minimumAmount) {
      largeTransaction++;
    }
  }
  return largeTransaction;
}

console.log("Daily Sales Dashboard:");
console.log(`Total Sales: Rp${calculateTotalSales(sales)}`);
console.log(`Highest Transaction: Rp${findHighestTransaction(sales)}`);
console.log(`Lowest Transaction: Rp${findLowestTransaction(sales)}`);
console.log(`Average Transaction: Rp${calculateAverageSale(sales).toFixed(2)}`);
console.log(`Number of Transactions Above Rp500,000: ${countLargeTransactions(sales, 500000)}`);