//module.exports --> exports
//require --> import

const firstModule = require("./first-module");
console.log(firstModule.add(10, 20));
console.log(firstModule.sub(10, 20));
console.log(firstModule.division(40, 20));
try {
  console.log("Trying to divide by zero");
  let result = firstModule.division(0, 0);
  console.log(result);
} catch (error) {
  console.log("Cuaght an error", error.message);
}

/*
// module wrapper
(function (exports, require, __filename, __dirname) {
  //your module code goes here
});

*/
