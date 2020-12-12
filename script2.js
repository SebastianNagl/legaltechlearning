let i = 1;

while (i <= 100) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("fizz");
        i++;
    } 
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("buzz");
        i++;
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
        i++;
    }
    else {
        console.log(i);
        i++;
    } 
}