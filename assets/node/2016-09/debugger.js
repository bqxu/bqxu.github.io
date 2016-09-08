'use strict';
let i = 0;

let sum = function () {
  let arg = arguments;
  console.log(sum);
  console.log(this);
  this.sum = this.sum || 0;
  if (arguments.length == 1) {
    this.sum = this.sum + arg[0]
  } else {
    arg.shift();
    this.sum = this.sum + arguments[0];
    sum.apply(this, arg)
  }
  return sum.bind(this);
};

sum.prototype.sum = 0;


sum(1);
sum(1)(2);
