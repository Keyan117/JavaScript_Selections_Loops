console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//let i = 1;

//while (i < 100) {
 // if (i % 2 !== 0) {
 //   console.log(i);
  //}
//}

//let x = 1;

//do {
 // if (x % 2 !== 0) {
 //   console.log(i);
  //}

 // i++;
//} while (x < 100);




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "FIZZ");
  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");
  }
}

//let i = 1;

//while (i <= 100) {
 // let output = "";
  
  //if (i % 3 == 0) {
 //   output += "FIZZ";
  //}

 // if (i % 5 == 0) {
  //  output += "Buzz;"
  //}

 // console.log('${i} ${output}');

 // i++;
//}

//let x = 1;

//do (x <= 100) {
 // let output = "";
  
 // if (x % 3 == 0) {
  //  output += "FIZZ";
  //}

  //if (x % 5 == 0) {
  //  output += "Buzz;"
  //}

  //console.log('${x} ${output}');

  //i++;
//}

//Exercise 4: Find Value

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let foundValue = false;

for (let i = 1; i <= n; i++) {
  if (i == numberToFind) {
    foundValue = true;
    break;
  }
}

//let foundValue;

//for (let i = 1; i <= n; i++) {
//  if (i == numberToFind) {
  //  console.log ('Found ${numberToFind}!');
    //break;
  //}

  //if (i ==n) {
  //  console.log('Did not find ${numberToFind} within 1-${n}..');
  //}
//}









