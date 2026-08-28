/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */



const roomPricePerNight = 650000;
const nightsStayed = 4;
const serviceCharge = 120000;
const taxRate = 0.11; 
const isVIPMember = true;

const VIP_DISCOUNT_RATE = 0.12;
const MIN_NIGHTS_FOR_FREE_BREAKFAST = 3;


const roomSubtotal = roomPricePerNight * nightsStayed;


const discount = isVIPMember ? roomSubtotal * VIP_DISCOUNT_RATE : 0;


const roomAfterDiscount = roomSubtotal - discount;


const taxableAmount = roomAfterDiscount + serviceCharge;
const tax = taxableAmount * taxRate;


const finalPayment = taxableAmount + tax;


const isEligibleForFreeBreakfast = nightsStayed >= MIN_NIGHTS_FOR_FREE_BREAKFAST || isVIPMember;


console.log("=== Tagihan Hotel ===");
console.log("Subtotal Kamar (" + nightsStayed + " malam): Rp" + roomSubtotal.toLocaleString("id-ID"));
console.log("Diskon VIP (12%): Rp" + discount.toLocaleString("id-ID"));
console.log("Harga Kamar Setelah Diskon: Rp" + roomAfterDiscount.toLocaleString("id-ID"));
console.log("Service Charge: Rp" + serviceCharge.toLocaleString("id-ID"));
console.log("Pajak (11%): Rp" + tax.toLocaleString("id-ID"));
console.log("Total Pembayaran Akhir: Rp" + finalPayment.toLocaleString("id-ID"));
console.log("Berhak Sarapan Gratis:", isEligibleForFreeBreakfast ? "Ya" : "Tidak");