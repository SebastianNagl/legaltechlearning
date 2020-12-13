// Nacchtrag zu Strings
// interpolation
// let dynamischeZahl = 27;
// `Textnachricht ((...)) gekritzel`
// console.log('Textnachricht ' + dynamischeZahl + ' gekritzel')
// console.log(`Textnachricht ${dynamischeZahl} gekritzel`);

//Funktionen

//a b => a + b

a = 5;
b = 20;

// console.log(a + b);

// klassisch
// function derSummierer(dude, j) {

//   for (let i = 1; i < 50; i++) {
//     console.log(dude + j);
//   }

//   return dude + j;

// }


// let variabl1 = 20;
// let variabl2 = 25;

// let ergebnis = derSummierer(variabl1, variabl2);

//moderne Schreibweise
// let neueFnktion = (name) => {
//   console.log('Verknüpfung steht');
//   return {
//     'der typ': name
//   }
// };

// let rapper = neueFnktion('Xatar');
// console.log(rapper);

module.exports = neueFnktion = (name) => {
  // console.log('Verknüpfung steht');
  return {
    'der typ': name
  }
};

//alternativer weg mit dem exports objekt
// exports.neueFnktion = (name) => {
//   console.log('Verknüpfung steht');
//   return {
//     'der typ': name
//   }
// };