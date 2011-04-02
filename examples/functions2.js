var calculateCircumference = function(diameter) {
  return diameter * Math.PI;
}

console.log(calculateCircumference(1.5));

console.log("----");
var incrementer = function() {
  var x = 0
  var addOne = function() {
    x = x + 1;
    return x;
  };
  return addOne;
};


add = incrementer();
console.log(add());
console.log(add());
console.log(add());


console.log("----");

var incrementer2 = function(start, addBy) {
  var x = start;
  var addOne = function() {
    x = x + addBy;
    return x;
  }
  return addOne;
}

incr = incrementer2(100, 5);

console.log(incr());
console.log(incr());
console.log(incr());

