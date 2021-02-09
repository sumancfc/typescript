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

//Type enum
enum Role {
  ADMIN,
}

const user = {
  name: "Suman",
  age: "26",
  hobbies: ["music", "football"],
  role: Role.ADMIN,
};
const { role } = user;

if (role === Role.ADMIN) {
  console.log("Is Admin");
}

// type literal
const combine = (
  input1: number | string,
  input2: number | string,
  showResult: "as-number" | "as-text"
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    showResult === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineNumber = combine(10, 20, "as-number");
console.log(combineNumber);

const combineStr = combine("10", "20", "as-number");
console.log(combineStr);

const combineString = combine("Suman", "Shrestha", "as-text");
console.log(combineString);
