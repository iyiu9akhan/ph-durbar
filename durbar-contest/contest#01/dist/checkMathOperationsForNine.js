"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkMathOperationsForNine(a, b) {
    // TODO: Implement this function
    if (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) {
        return "Nine";
    }
    else {
        return "Nein";
    }
}
console.log(checkMathOperationsForNine(5, 4));
console.log(checkMathOperationsForNine(4, 4));
//# sourceMappingURL=checkMathOperationsForNine.js.map