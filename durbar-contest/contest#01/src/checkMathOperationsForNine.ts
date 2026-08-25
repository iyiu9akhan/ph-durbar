function checkMathOperationsForNine(a: number, b: number): string {
  // TODO: Implement this function
  if(a+b===9 || a-b===9 || a*b===9 || a/b===9){
    return "Nine"
  }else{
    return "Nein"
  }
}

console.log(checkMathOperationsForNine(5,4))
console.log(checkMathOperationsForNine(4,4))