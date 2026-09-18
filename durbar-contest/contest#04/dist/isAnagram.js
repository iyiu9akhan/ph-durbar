"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAnagram(s1, s2) {
    // TODO: Implement this function
    let text1 = s1.toLocaleLowerCase();
    let text2 = s2.toLocaleLowerCase();
    let change1 = text1.replace(/[^a-z]/g, "");
    let change2 = text2.replace(/[^a-z]/g, "");
    let sort1 = change1.split("").sort().join("");
    let sort2 = change2.split("").sort().join("");
    return sort1 === sort2;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Hello", "world"));
console.log(isAnagram("A decimal point", "I'm a dot in place"));
//# sourceMappingURL=isAnagram.js.map