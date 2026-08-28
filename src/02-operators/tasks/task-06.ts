/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */



const hoursUsed = 7;
const minutesUsed = 35;

const RATE_PER_HOUR = 8000;
const DISCOUNT_THRESHOLD_HOURS = 5;
const DISCOUNT_RATE = 0.15; 

const totalMinutes = (hoursUsed * 60) + minutesUsed;


const remainingMinutes = totalMinutes % 60;


const billedHours = Math.ceil(totalMinutes / 60);


const totalBeforeDiscount = billedHours * RATE_PER_HOUR;


const isEligibleForDiscount = hoursUsed > DISCOUNT_THRESHOLD_HOURS;
const discountAmount = isEligibleForDiscount ? totalBeforeDiscount * DISCOUNT_RATE : 0;

const finalPayment = totalBeforeDiscount - discountAmount;


console.log("=== Tagihan Warnet ===");
console.log("Waktu Pemakaian:", hoursUsed, "jam", minutesUsed, "menit");
console.log("Total Waktu (menit):", totalMinutes);
console.log("Sisa Menit Setelah Jam Penuh:", remainingMinutes);
console.log("Total Jam yang Ditagih:", billedHours, "jam");
console.log("Total Sebelum Diskon: Rp" + totalBeforeDiscount.toLocaleString("id-ID"));
console.log("Berhak Diskon 15%:", isEligibleForDiscount ? "Ya" : "Tidak");
console.log("Jumlah Diskon: Rp" + discountAmount.toLocaleString("id-ID"));
console.log("Total Pembayaran Akhir: Rp" + finalPayment.toLocaleString("id-ID"));