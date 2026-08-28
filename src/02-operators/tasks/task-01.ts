/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */


const friedRicePrice = 18000;
const friedRiceQty = 3;
const waterPrice = 5000;
const waterQty = 2;
const discount = 10000;

const totalFoodPrice: number = friedRicePrice*friedRiceQty
const totalDrinksPrice: number = waterPrice*waterQty
const grandtotal: number = totalFoodPrice+totalDrinksPrice
const finalPayment: number = grandtotal-discount

console.log("|Rincian Pembelian Kantin Sekolah|")
console.log("Total Harga Makanan: " + totalFoodPrice)

console.log("Total Harga Minuman: " + totalDrinksPrice)

console.log("Total: " + grandtotal)
console.log("Diskon (Anggota Osis): " + discount)
console.log("Pembayaran Akhir: " + finalPayment)

