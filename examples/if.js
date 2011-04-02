var x = 2;
if (x == 1) {
  console.log(1);
} else if (x == 2) {
  console.log(2);
} else {
  console.log("none");
}

var items = ["house", "ball", "Teenage mutant ninja turles."];
for (var i=0; i<items.length; i++) {
  console.log(items[i]);
}


var concert = {
  time: "800pm",
  singer: "Julieta Venegas",
  numberOfSongs: 18,
  seats: "front row"
};

for (var key in concert) {
  console.log("the concert's " + key + " is " + concert[key]);
}

