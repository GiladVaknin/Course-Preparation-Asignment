//Create a calculator
function Calculator() {
  this.read = function () {
    let firstNum = prompt("Enter a num", 0);
    let secondNum = prompt("Enter another num", 0);
    this.num1 = firstNum;
    this.num2 = secondNum;
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

//Create new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let num = prompt("Enter a num", 0);
    this.value += num;
  };
}
