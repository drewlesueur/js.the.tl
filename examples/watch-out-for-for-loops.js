var numbers = [1, 2, 3, 4, 5, 6];

var incorrectWay = function() {
  for (var i = 0; i < numbers.length; i++) {
    setTimeout(function(){
      console.log(i);   
    }, 1000);
  }
}


var waitThenLog = function(i) {
  setTimeout(function(){
    console.log(i);   
  }, 1000);
}

var correctWay = function() {
  for (var i = 0; i < numbers.length; i++) {
    waitThenLog(i);
  }
}

incorrectWay();
//correctWay();
