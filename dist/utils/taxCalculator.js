"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    const tax = category === "groceries" ? 0.03 : 0.0475;
    return price * tax;
}
