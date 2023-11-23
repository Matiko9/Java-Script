//exercises 1
let i = 3;
while (i) {
alert( i-- );
}


//The last value displayed by this code will be the number 1. After displaying the number 1, the value of i 
//will be decremented by 1 and will become 0. The while loop condition will become false, so the loop will terminate.

//exercises 2


//first part 
//1
//2
//3
//4

//second part
//1
//2
//3
//4
//5

//exercises 3 

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }

  
  //exercises 4

  let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
 
//exercises 5

let number;

do {
  number = prompt("Please enter a number greater than 100:", "");

 
  if (number !== null && number <= 100) {
    alert("Please enter a number greater than 100.");
  }
} while (number !== null && number <= 100);

//exercises 6 

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function printPrimesInRange(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
 
  let n = 20; 
  console.log(`Prime numbers between 2 and ${n}:`);
  printPrimesInRange(n);
  