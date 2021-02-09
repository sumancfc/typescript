function add(num1: number, num2: number) {
  return num1 + num2;
}

function showResult(num: number): void {
  console.log("Result is" + num);
}

showResult(add(10, 20));

let compareResult: (n1: number, n2: number) => number;

//function type and callbacks
function callbackFunc(n1: number, n2: number, cb: (num: number) => void) {
  const rs = n1 + n2;
  cb(rs);
}

compareResult = add;

console.log(compareResult(10, 20));

callbackFunc(20, 20, (re) => {
  console.log(re);
});
