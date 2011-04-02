//Timing functions
// functions are first class citizens

var boom = function() {
  console.log("boom!");
}


setTimeout(boom, 3000);
console.log("She's gonna blow");

var count = 3;
var logCount = function() {
  count = count - 1;
  console.log(count);
}
interval = setInterval(logCount, 1000);


setTimeout(function() {
  clearInterval(interval);    
}, 6000);


