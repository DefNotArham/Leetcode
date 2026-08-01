var addDigits = function (num) {
  const numString = String(num);
  const splitString = numString.split("");

  let sum = 0;

  for (let i = 0; i < splitString.length; i++) {
    sum = sum + Number(splitString[i]);
  }

  return sum;
};

console.log(addDigits(12));
