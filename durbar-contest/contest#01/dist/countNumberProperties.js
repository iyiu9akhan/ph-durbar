"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countNumberProperties(numbers) {
    // TODO: Implement this function
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
        if (num > 0) {
            positive++;
        }
        else if (num < 0) {
            negative++;
        }
    }
    return { even, odd, positive, negative };
}
console.log(countNumberProperties([-5, 0, 3, -4, 1]));
console.log(countNumberProperties([2, 4, 6, 8, 10]));
//# sourceMappingURL=countNumberProperties.js.map