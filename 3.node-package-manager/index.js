const lodash = require('lodash');

const names = ['ram','sham','pratik','dipak'];

const capitalize = lodash.map(names , lodash.capitalize);
console.log(capitalize)