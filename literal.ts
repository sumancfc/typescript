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

//aliases type
type compareable = number | string;
type compareNumStr = "as-number" | "as-text";

const combine1 = (
  input1: compareable,
  input2: compareable,
  showResult: compareNumStr
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

const combineNumber1 = combine(10, 20, "as-number");
console.log(combineNumber1);

const combineStr1 = combine("10", "20", "as-number");
console.log(combineStr1);

const combineString1 = combine("Suman", "Shrestha", "as-text");
console.log(combineString1);
