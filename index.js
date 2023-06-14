function somar(num1 = 0, num2 = 0) {
  return num1 + num2;
}
console.log(somar(10, 23));

//   Exercício 2   //

function dividir(dividendo, divisor) {
  return Math.floor(dividendo / divisor);
}
console.log(dividir(11, 5));

//   Exercício 3   //

function subtrair(minuendo, subtraendo) {
  if (
    minuendo == null ||
    minuendo == undefined && subtraendo == null ||
    subtraendo == undefined
  ) {
    console.log("Impossível realizar a operação");
  } else {
    return minuendo - subtraendo;
  }
}
console.log(subtrair(9, 8));
