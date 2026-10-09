/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];


interface Order {
    id: string;
    paid: boolean;
    inStock: boolean;
}
 
// Sample data: replace with the array given in your assignment
const orders: Order[] = [
    { id: "ORD-001", paid: true, inStock: true },
    { id: "ORD-002", paid: true, inStock: false },
    { id: "ORD-003", paid: false, inStock: true },
    { id: "ORD-004", paid: true, inStock: true },
    { id: "ORD-005", paid: false, inStock: false },
    { id: "ORD-006", paid: true, inStock: true },
    { id: "ORD-007", paid: true, inStock: false },
    { id: "ORD-008", paid: false, inStock: true },
    { id: "ORD-009", paid: true, inStock: true },
    { id: "ORD-010", paid: true, inStock: true }
];
 
let readyCount = 0;
let unpaidCount = 0;
let waitingStockCount = 0;
const readyOrderIds: string[] = [];
 
for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
 
    // Payment is checked first, so each order falls into exactly one category
    if (!order.paid) {
        unpaidCount++;
    } else if (!order.inStock) {
        waitingStockCount++;
    } else {
        readyCount++;
        readyOrderIds.push(order.id);
    }
}
 
console.log("=== Order Shipping Report ===");
console.log(`Total orders        : ${orders.length}`);
console.log(`Ready to ship       : ${readyCount}`);
console.log(`Unpaid              : ${unpaidCount}`);
console.log(`Waiting for stock   : ${waitingStockCount}`);
console.log(`Ready order IDs     : ${readyOrderIds.length > 0 ? readyOrderIds.join(", ") : "-"}`);