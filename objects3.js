//Create a calculator
let calculator = {
  read() {
    let firstNum = prompt("Enter a num", 0);
    let secondNum = prompt("Enter another num", 0);
    this.num1 = firstNum;
    this.num2 = secondNum;
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};

//Chaining
let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};
