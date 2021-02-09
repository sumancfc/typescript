function add(
  num1: number,
  num2: number,
  printResult: boolean,
  resultS: string
) {
  if (printResult) {
    const res = num1 + num2;
    console.log(resultS + res);
  } else {
    return num1 + num2;
  }
}

const number1 = 10;
const number2 = 56;
const showResult = true;
const resultString = "Result i: ";

const result = add(number1, number2, showResult, resultString);

console.log(result);
