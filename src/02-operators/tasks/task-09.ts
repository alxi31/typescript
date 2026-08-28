/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */


const products = [
    { name: "Mechanical Keyboard", price: 850000, quantity: 1 },
    { name: "Wireless Mouse", price: 275000, quantity: 2 },
    { name: "Monitor Stand", price: 420000, quantity: 1 },
];

const voucherValue = 100000;
const isPremiumMember = true;
const REWARD_POINT_RATE = 50000; 
const MEMBER_DISCOUNT_RATE = 0.10; 
const VAT_RATE = 0.11; 
const FREE_SHIPPING_THRESHOLD = 1500000;


let productSubtotal = 0;
for (let i = 0; i < products.length; i++) {
    productSubtotal += products[i].price * products[i].quantity;
}


const membershipDiscount = isPremiumMember ? productSubtotal * MEMBER_DISCOUNT_RATE : 0;
const afterMembershipDiscount = productSubtotal - membershipDiscount;


const paymentBeforeTax = afterMembershipDiscount - voucherValue;

const vat = paymentBeforeTax * VAT_RATE;

const finalPayment = paymentBeforeTax + vat;


const rewardPoints = Math.floor(paymentBeforeTax / REWARD_POINT_RATE);


const isEligibleForFreeShipping = isPremiumMember || paymentBeforeTax > FREE_SHIPPING_THRESHOLD;

console.log("=== Ringkasan Checkout ===");
console.log("Subtotal Produk: Rp" + productSubtotal.toLocaleString("id-ID"));
console.log("Diskon Membership (10%): Rp" + membershipDiscount.toLocaleString("id-ID"));
console.log("Setelah Diskon Membership: Rp" + afterMembershipDiscount.toLocaleString("id-ID"));
console.log("Potongan Voucher: Rp" + voucherValue.toLocaleString("id-ID"));
console.log("Payment Before Tax: Rp" + paymentBeforeTax.toLocaleString("id-ID"));
console.log("PPN (11%): Rp" + vat.toLocaleString("id-ID"));
console.log("Final Payment: Rp" + finalPayment.toLocaleString("id-ID"));
console.log("Reward Points:", rewardPoints, "poin");
console.log("Gratis Ongkir:", isEligibleForFreeShipping ? "Ya" : "Tidak");