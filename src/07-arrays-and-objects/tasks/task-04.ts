/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];


let total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)


const discountRate= [
    {min: 3000000, rate: 0.10},
    {min: 2000000, rate: 0.05},
];

const ttldiscount = discountRate.find((rule) => total >= rule.min)?.rate ?? 0;   
const discount = total * ttldiscount;
const finaltotal = total - discount
const exP = cart.filter((cart) => cart.price >1000000)

console.log(total)
console.log(ttldiscount*100 + "%", discount)
console.log(finaltotal)
console.log(exP)