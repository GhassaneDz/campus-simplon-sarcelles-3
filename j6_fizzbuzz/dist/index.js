console.log("hello world => code a fizzBuzz program !!!");

/**
 * @module fizzBuzz
 */
(function() {
  "use strict";

  const getNumbers = function getNumbers(n) {
    let numbers = [...Array(n).keys()];
    return numbers.slice(1, numbers.length);
  };

  const solve = function solve(nList, op1, op2) {
    return nList.map(nb => {
      if (!(nb % op1) && !(nb % op2)) return "FizzBuzz";
      else if (!(nb % op1)) return "Fizz";
      else if (!(nb % op2)) return "Buzz";
      else return nb;
    });
  };

  const read = function read(list) {
    for (let el of list) {
      console.log(el);
    }
  };

  read(solve(getNumbers(101), 3, 5));

}());
