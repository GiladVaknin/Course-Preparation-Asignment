//Hello ,object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Check for emptiness
function isEmpty(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  if (arr.length > 0) {
    return false;
  }
  return true;
}

//Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    sum += salaries[salary];
  }
  return sum;
}

//Multiply numeric property values by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
