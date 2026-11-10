/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const getCompletedOrders = () => {
    return orders.filter(order => order.status === "completed");
}

const calculateTotalValueOfOrder = (order: { items: { product: string; price: number; quantity: number }[] }) => {
    return order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

const findCustomerWithHighestSpending = () => {
    const spendingMap: { [customer: string]: number } = {};
    orders.forEach(order => {
        if (order.status === "completed") {
            const totalValue = calculateTotalValueOfOrder(order);
            spendingMap[order.customer] = (spendingMap[order.customer] || 0) + totalValue;
        }
    });
    return Object.keys(spendingMap).reduce((a, b) => spendingMap[a] > spendingMap[b] ? a : b, '');
}

const calculateTotalRevenue = () => {
    return getCompletedOrders().reduce((total, order) => total + calculateTotalValueOfOrder(order), 0);
}

const findAllPurchasedProducts = () => {
    const productsSet = new Set<string>();
    orders.forEach(order => {
        if (order.status === "completed") {
            order.items.forEach(item => productsSet.add(item.product));
        }
    });
    return Array.from(productsSet);
}

console.log("1. Completed orders:", getCompletedOrders());  
console.log("2. Total value of each order:", orders.map(order => ({ id: order.id, totalValue: calculateTotalValueOfOrder(order) })));
console.log("3. Customer with the highest spending:", findCustomerWithHighestSpending());
console.log("4. Total revenue from completed orders:", calculateTotalRevenue());
console.log("5. All purchased products:", findAllPurchasedProducts());
