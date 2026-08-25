"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    // TODO: Implement the function
    let remainingMoney = totalMoney - cakeCost;
    if (remainingMoney < 0) {
        return remainingMoney;
    }
    let donutQuantity = remainingMoney % donutCost;
    return donutQuantity;
}
console.log(calculateRemainingMoney(100, 20, 10));
console.log(calculateRemainingMoney(50, 30, 7));
console.log(calculateRemainingMoney(50, 60, 7));
//# sourceMappingURL=calculateRemainingMoney.js.map