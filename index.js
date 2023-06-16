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
    minuendo === null ||
    (minuendo === undefined && subtraendo === null) ||
    subtraendo === undefined
  ) {
    return "Impossível realizar a operação";
  } else {
    return minuendo - subtraendo;
  }
}
console.log(subtrair(9, 8)); //a saída vai ser normal, pois os dois valores foi atribuidos

// console.log(subtrair(5)); //a saída vai dar erro, pois só um valor foi atribuido

//   Exercício 4   //

function multiplicar(multiplicando, multiplicador) {
  if (typeof multiplicando && typeof multiplicador !== Number) {
    return "A Operação é efetuada somente com valores do tipo numero";
  }

  if (
    (multiplicando && multiplicador == "") ||
    (multiplicando && multiplicador == null) ||
    (multiplicando && multiplicador == undefined)
  ) {
    return "Impossível realizar a operação";
  } else {
    return Math.floor(multiplicando * multiplicador);
  }
}
console.log(multiplicar(5, 5)); // aqui a função vai dar certo
// console.log(multiplicar(5, "5"));  // aqui a função vai dar errado
// console.log(multiplicar(5, ""));  // aqui a função vai dar errado
