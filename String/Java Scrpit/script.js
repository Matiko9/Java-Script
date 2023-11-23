alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );

//1. 2
//2. 1 i 2
//3. null
//4. 1
//5. 3


// 2 exercises

let Age = 25; 

if (Age >= 14 && Age <= 90) {
    console.log("Age ranges from 14 to 90 years (inclusive).");
} else {
    console.log("Age is NOT between 14 and 90 years (inclusive).");
}

//3 exercises
let age = 25;

if (age < 14 || age > 90) {
    console.log("Age is NOT between 14 and 90 years (inclusive)");
} else {
    console.log("Age ranges from 14 to 90 years (inclusive)");
}

// 4 exercises

//The following alerts will be issued: 'first' and 'third'
//Alert 'second' will not be execute

// 5 exercises 

let login = prompt("Login:");

if (login === "Root") {
    let password = prompt("Password:");

    if (password === "Spain") {
        console.log("Hello!");
    } else if (password === "" || password === null) {
        console.log("Canceled");
    } else {
        console.log("Wrong password");
    }

} else if (login === "" || login === null) {
    console.log("Canceled");
} else {
    console.log("I do not know you");
}

