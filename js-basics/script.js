//console.log("Hi, ich bin da");

// let ... --> Variable, die änderbar ist (Definition);
//let text = "Ich heiße Helena"; 

//console.log(text);

// const ... --> nicht änderbar, konstante Variable;

//const ersteVariable = 12;
//console.log(ersteVariable);

// var ... --> wie let, werden zuerst geladen; wurde ersetzt durch let und const --> nicht hernehmen;

//var variable = "Wir werden zuerst geladen";
//console.log(variable);

//Numbers;
//let test; 
//test = `Ich bin der Weihnachtsmann`;
//console.log(test);



//test = 4;

//console.log(test);
//console.log(typeof test);

//if (test){
 //   console.log("Läuft");
//}

//Strings 

//Boolean (true | false);
// alle Werte, die existieren sind true (truthy);
// werte, die false sind (falsy): 
    // Zahl 0; 
    // Schlüsselwort Null; 
    // Schlüsselwort undefined;
    // boolean wert false;
    // leerer String; 
    //  NaN;

// Bedingungen (Conditional Statements);
//let a = 1;
//let b = 2;

//if (a === b) {
 //   console.log("das ist richtig");    
//} 
//else {
   // console.log("das ist falsch");
//}

// AND (&&), OR (||), NOT (!);


//if (a === 1 && b === 2){
 // console.log("das ist richtig");
//}


//if (a === 1 || b === 1) {
   // console.log("das ist richtig");
//}


//if (!a){
  //  console.log("das ist falsch");
//}


// Loops
// for loops (wie oft)
    // i = i + 1 --> i++; (schrittweise +1 erhöhen)
//for (let i = 0; i < 6; i++){
 //   console.log("Bald ist Weihnachten!");
//}

// while loops (solange wie eine grundlegende Bedingung gegeben) 
//let j = 0
//while (j < 30){
  //  console.log("heute ist der Himmel grau");
  //  j++;
//}


let i;

// ich brauche einen Loop, der bis 100 zählt
// i++
// ich brauche 4 bedingungen 
// wenn eine der Bedingungen eintritt, darf i nicht mehr geschrieben werden 
// else: console.log(i);
// 1. Bedingung: i % 3 === 0 --> console.log("fizz");
// 2. Bedingung: i % 5 === 0 --> console.log("buzz");
// 3. Bedingung: i % 3 === 0 && i % 5 === 0 --> console.log("fizz buzz")


for (let i = 1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz");
    }
    else if (i % 3 === 0 ) {
        console.log("fizz");
    }    
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}


//Array "Ur-Form einer Datenbank"
//let array = [1, "a", true];

//let satz = 'Hi ich bin auch noch dabei!'

//push fügt satz hinzu 
//array.push(satz); 

//console.log(array);


//Object --> key-value pairs (Datenspeicherung, es kommt aber nicht auf Reihenfolge an)
let object = {
    'a': 1,
    'nummeroDuo': "right",
    'tre': ['hallo']
}

console.log(object.tre);