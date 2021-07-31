const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsByYear = inventors.filter(inventor => inventor.year >=1500 && inventor.year <=1599)
//console.table(inventorsByYear)



// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map(inventor => `${inventor.last}, ${inventor.first}`)
//console.table(firstAndLast)



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldToYoung = inventors.sort(function(a, b) {
return a.year > b.year ? 1 : -1
})
//console.table(oldToYoung)
/* Sort puede necesitar una función comparadora para defirnir 
el modo en que ordenará los resultados (1, -1). En caso de ordenar texto, a menos que
se especifique una fn comparadora, el modo de ordenación por defecto responde a la 
posición del valor del string de acuerdo a su valor Unicode */



// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)
//console.log(totalYearsLived)
/* total representa los años vividos por todos los inventores, es el acumulador.
inventor, saca la cantidad de años vividos por cada inventor en particular. Es decir, son variables.
Como al principio no tenemos un total, puedar dar un error [object Object]7859843780508967907681.
Para evitar esto, se debe indicar que el valor inicial de total, es 0 */




// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
  const firstInventor = a.passed - a.year;
  const secondInventor = b.passed - b.year;
  return firstInventor > secondInventor ? -1 : 1;
})
//console.log(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));

const de = links
                .map(link => link.innerText)
                .filter(boulevardName  => boulevardName.includes('de')) */



// 7. sort Exercise
// Sort the people alphabetically by last name

/* const byLastname = people.sort(function(lastOne, firsrtOne) {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = firsrtOne.split(', ');
  return aLast > bLast ? 1 : -1
})
console.table(byLastname) */

const byLastname2 = people.sort(function(a, b) {
  return a > b ? 1 : -1;
})
//console.table(byLastname2)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce(function (acumulator, transport) {
  acumulator[transport] = (acumulator[transport] || 0) + 1;
  return acumulator
}, {})

const transportationM2 = data.reduce(function (acumulator, transport) {
  if(!acumulator[transport]) {
    acumulator[transport] = 0;
  }
  acumulator[transport]++;
  return acumulator
}, {})

//console.table(transportation)
//console.table(transportationM2);

/* En ambos casos, se llama a reduce con un acumulador y un parametro que representa a cada item.
Al haber varios items, reduce va a devolver un objeto, por eso se debe indicar al final, el estado
inicial del mismo, es decir, 0 o {}. Acumulator[transport] representa la cantidad de veces que 
un item se repite, por eso se indica entre corchetes a transport. Un acumulador por cada item.
En cada ej de reduce se indica que, si no hay un item, que su valor sea 0 y que por cada 
repetición de un item existente, se sume uno. Por ultimo, se retorna acumulator que devuelve la 
cantidad de veces que se repite un item */