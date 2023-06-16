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
console.log(subtrair(9, 8));

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

//   Exercício 5   //

function multiply(produto1, operacao, produto2) {
  if (
    produto1 === undefined ||
    operacao === undefined ||
    produto2 === undefined
  ) {
    return "Impossível realizar a operação";
  }

  if (typeof produto1 !== "number" || typeof produto2 !== "number") {
    return "A Operação é efetuada somente com valores do tipo numero";
  }

  let resultado;
  switch (operacao) {
    case "+":
      resultado = produto1 + produto2;
      break;
    case "-":
      resultado = produto1 - produto2;
      break;
    case "x":
      resultado = produto1 * produto2;
      break;
    case "÷":
      resultado = produto1 / produto2;
      break;
    default:
      return "Operador desconhecido. Use +, -, x ou ÷";
  }

  return resultado;
}
console.log(multiply(11, "x", 3));
