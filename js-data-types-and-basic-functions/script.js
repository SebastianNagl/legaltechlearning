// console.log('HI. ich funktioniere!');

let text = 'Dies ist meine erste Variablenzuweisung';
// console.log(text);

//let
let ursprungsVariable = 'Ursprungstext';
ursprungsVariable = 'Neuer Text';

// console.log(ursprungsVariable);

//const
const ersteVariable = 2;
// ersteVariable = 'Hello';
// console.log(ersteVariable);

//var
// var variable = 'Dont use me pls';
// console.log(variable);

// inhalte von variablen - data types
let testVariable;

//Numbers
// testVariable = 2;
// testVariable = 2.222;

//Strings
testVariable = 'Hi ich bin der Text Brudi';
// testVariable = "Hi ich bin der Text Brudi";
// testVariable = `Hi ich bin der Text Brudi`;

// if (typeof testVariable === 'string') {
//   testVariable = parseInt(testVariable);
// }

//boolean (true | false)
// testVariable = true;
// testVariable = false;

//truthy || falsy
// Zahl 0 
// Schlüsselwort null 
// Schlüsselwort undefined
// Boolean false
// NaN
// leerer String

// Bedingungen (Conditional Statements)

// let a = 1;
// let b = 1;

// ===
// if (a === b) {
//   console.log('ja es geht');
// }

// AND, OR, NOT

// AND, &&
// if (a === 1 && b === 1) {
//   console.log('ja es geht');
// }

//OR, ||
// if (a === 1 || b === 1) {
//   console.log('ja es geht');
// }

//NOT, ! 
// if (!a) {
//   console.log('ja es geht');
// }

// Loops
//DRY

// for loops
// let i;
// i = 1;
// i = i + 1;
// i++;

// for (let i = 6; i > 0; i--) {
//   console.log(testVariable);
// }

// while loops
// let j = 0;
// while (j < 1000) {
//   console.log(testVariable + 'und das ist mega');
//   j++;
// }

// + - * / % 
// % 
// console.log(5 % 5);

// console.log(testVariable);
// console.log('workin');

// Arrays
// let array = ['a', 1, false];
// let variable = 'Hi ich bin der Neue hier!'
// let variable2 = ['b', 42];

// array.push(variable);
// array.push(variable2);
// console.log(array[4][1]);

//Object
let object = {
  'a': 1,
  'nummeroDuo': false,
  'tres': ['a']
};

let customer = {
  'name': 'Petra',
  'address': {
    'street': 'Kaulbachstr.',
    'zip': 80533
  }
}

customer['country'] = 'Schland';

console.log(customer);