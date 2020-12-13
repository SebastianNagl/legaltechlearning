// Strings
// let string = 'alsdjfhKH. DKSAJHDalkjd sfhkljash';
// console.log(string[2])

// console.log(string.toLowerCase());
// console.log(string.split('.'));
// console.log(string.replace());

//in string umwandeln
// let a = 555;
// console.log(a + 15);
// console.log(typeof `${a}`);
// console.log(typeof a.toString());

// let ergebnis = a.toString().split('');
// console.log(ergebnis + 15);

// Numbers
// let b = '555'
// console.log(b + 15);
// console.log(parseInt(b) + 15);
// console.log(typeof +b);

// Booleans

// Arrays
let array = [];
array.push('a');
array.push(2);
array.pop();
array.unshift('b');
array.shift();
array[0] = 'c';
array.push(1);
array.push(true);
console.log(array);

// array.forEach((i) => { console.log(i) })
let neuesArray = array.map((i, j) => {
  let key = `Position ${j}`;
  let value = i;
  let obj = {};
  obj[key] = value;
  return obj;
})
console.log(neuesArray);

// Objects 