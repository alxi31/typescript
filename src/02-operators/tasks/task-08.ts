/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */


const previousMeter = 25640;
const currentMeter = 25892;
const pricePerKWh = 1650;
const hasSolarPanel = true;
const isEnergySavingMode = false;

const SOLAR_DISCOUNT_RATE = 0.20;
const ENERGY_SAVING_DISCOUNT_RATE = 0.05; 
const GREEN_PROGRAM_MAX_USAGE = 300; 


const totalConsumption = currentMeter - previousMeter;


const billBeforeDiscount = totalConsumption * pricePerKWh;


let totalDiscountRate = 0;
if (hasSolarPanel) {
    totalDiscountRate += SOLAR_DISCOUNT_RATE;
}
if (isEnergySavingMode) {
    totalDiscountRate += ENERGY_SAVING_DISCOUNT_RATE;
}
const discountAmount = billBeforeDiscount * totalDiscountRate;


const finalBill = billBeforeDiscount - discountAmount;


const isEligibleForGreenProgram = 
    hasSolarPanel && 
    totalConsumption < GREEN_PROGRAM_MAX_USAGE && 
    isEnergySavingMode;


console.log("=== Laporan Pemakaian Listrik ===");
console.log("Total Konsumsi Energi:", totalConsumption, "kWh");
console.log("Tagihan Sebelum Diskon: Rp" + billBeforeDiscount.toLocaleString("id-ID"));
console.log("Total Diskon (" + (totalDiscountRate * 100) + "%): Rp" + discountAmount.toLocaleString("id-ID"));
console.log("Tagihan Akhir: Rp" + finalBill.toLocaleString("id-ID"));
console.log("Eligible Green Energy Program:", isEligibleForGreenProgram ? "Ya" : "Tidak");