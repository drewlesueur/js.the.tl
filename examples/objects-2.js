var band = {
  name: "Aterciopelados",
  members: [
    "Hector Buitrago",
    "Andrea Echeverri",
    "Camilo Moreno",
    "Mauricio Montenegro",
    "Marco Farinango"
  ],
  started : '1992',
  discography: [{ 
      title: "Con el Corazon en la mano",
      releaseDate: "1992"
    }, {
      title: "El Dorado",
      releaseDate: "1994"
    }
  ]
}

console.log(band.name)
console.log(band.discography[1])
console.log(band["started"])
var prop = "started"
console.log(band[prop])
