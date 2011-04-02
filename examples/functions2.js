var calculateCircumference = function(diameter) {
  return diameter * Math.PI;
}

console.log calculateCircumference(1.5);



var incrementer = () ->
  var x = 0
  var addOne = () ->
    x = x + 1;
    return x;
  return addOne;

add = incrementer();
console.log(add());
console.log(add());
console.log(add());

