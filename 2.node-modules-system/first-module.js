//addition of 2 numbers
function add(number1, number2) {
    return number1 + number2;
  }
  //substraction of 2 numbers
  function sub(number1, number2) {
    return number1 - number2;
  }
  
  //division of 2 numbers
  function division(number1, number2) {
    if (number2 === 0) {
      throw new Error("Divide by zero is not aallowed");
    }
    return number1 / number2;
  }
  module.exports = {
    add,
    sub,
    division,
  };
  