// 1 exercises 
// be executed


// 2 exercises

var userAnswer = prompt('What is the "official" name of JavaScript?');

if (userAnswer === "ECMAScript") {
    alert("Right!");
} else {
    alert("You dont now?");
}

// 3 exercises

var number = prompt('Give a Number :');

number = parseFloat(number);

if (number > 0) {
    alert("1");
} else if (number < 0) {
    alert("-1");
} else {
    alert("0");
}


// 6 exercises

let result = (a + b < 4) ? 'Below' : 'Over';


// 7 exercises 

let message = (login === 'Employee')
  ? 'Hello'
  : (login === 'Director')
    ? 'Greetings'
    : (login === '')
      ? 'No login'
      : '';


      // 8 exercises

      if (browser === 'Edge') {
        alert("You've got the Edge!");
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }

    
    // 9 exercises


    let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        
        break;
}


