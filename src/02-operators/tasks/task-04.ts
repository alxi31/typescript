/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */


const products = [
    { name: "Mechanical Keyboard", price: 850000, quantity: 1 },
    { name: "Wireless Mouse", price: 275000, quantity: 2 },
    { name: "Mouse Pad", price: 120000, quantity: 1 },
];

const isPremiumMember = true;
const DISCOUNT_THRESHOLD = 1000000;
const DISCOUNT_RATE = 0.1; 


let subtotal = 0;
let totalItems = 0;

for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * products[i].quantity;

    
    for (let j = 0; j < products[i].quantity; j++) {
        totalItems++;
    }
}


const isEligibleForDiscount = subtotal > DISCOUNT_THRESHOLD;
const discountAmount = isEligibleForDiscount ? subtotal * DISCOUNT_RATE : 0;


const shippingCost = isPremiumMember ? 0 : 20000;


const finalPayment = subtotal - discountAmount + shippingCost;

console.log("=== Ringkasan Belanja ===");
console.log("Subtotal: Rp" + subtotal.toLocaleString("id-ID"));
console.log("Total Item Dibeli:", totalItems);
console.log("Berhak Diskon:", isEligibleForDiscount ? "Ya" : "Tidak");
console.log("Diskon (10%): Rp" + discountAmount.toLocaleString("id-ID"));
console.log("Ongkos Kirim:", isPremiumMember ? "Gratis (Member Premium)" : "Rp" + shippingCost.toLocaleString("id-ID"));
console.log("Total Pembayaran Akhir: Rp" + finalPayment.toLocaleString("id-ID"));