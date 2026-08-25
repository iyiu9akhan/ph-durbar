"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMonthName(monthNumber) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    //   return months[monthNumber - 1];
    return months[monthNumber - 1];
}
console.log(getMonthName(3));
//# sourceMappingURL=getMonthName.js.map