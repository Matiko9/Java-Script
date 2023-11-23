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