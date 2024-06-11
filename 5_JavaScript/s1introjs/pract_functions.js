/*suma*/
const sumTwoNum = (firstNum, secondNum) => {
    let result = firstNum + secondNum;
    return result;
};
let suma = sumTwoNum (5, 10)
console.log(suma);

/*resta*/
const restTwoNum = (firstNum, secondNum) => {
    let result = firstNum - secondNum;
    return result;
};
let resta = restTwoNum (50, 20)
console.log(resta);

/*multiplicacion*/
const multiplicarTwoNum = (firstNum, secondNum) => {
    let result = firstNum * secondNum;
    return result;
};
let multiplicacion = multiplicarTwoNum (2, 5)
console.log(multiplicacion);

/*division*/
const divTwoNum = (firstNum, secondNum) => {
    let result = firstNum / secondNum;
    return result;
};
let division = divTwoNum (8, 4)
console.log(division);

/*saber si un numero es par*/
function esPar(numero) {
    return numero % 2 === 0;
  }
console.log(esPar(10));
