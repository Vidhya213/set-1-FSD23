// swap

function swapNumbers() {
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);
  let temp = number1;
  number1 = number2;
  number2 = temp;
  document.getElementById("answer1").value = number1;
  document.getElementById("answer2").value = number2;
}

// check age

function checkAge() {
  var age = Number(document.getElementById("age").value);
  if (age >= 13 && age <= 19) {
    document.getElementById("answer").value = "you are teenager";
  } else if (age >= 20) {
    document.getElementById("answer").value = "you are not as teenager";
  } else {
    document.getElementById("answer").value = "please enter age";
  }
}

// Triangle

function checkTriangle() {
  var number3 = Number(document.getElementById("number3").value);
  var number4 = Number(document.getElementById("number4").value);
  var number5 = Number(document.getElementById("number5").value);
  if (number3 == number4 && number4 == number5) {
    document.getElementById("answer3").value = "It's an equilateral triangle";
  } else if (number3 == number4 || number4 == number5 || number5 == number3) {
    document.getElementById("answer3").value = "It's an  isosceles triangle";
  } else {
    document.getElementById("answer3").value = "It's an  scalene triangle";
  }
}

// power

function power() {
  var base = Number(document.getElementById("base").value);
  var power = Number(document.getElementById("power").value);
  if ((result = Math.pow(base, power))) {
    document.getElementById("answer4").value = result;
  } else {
    document.getElementById("answer4").value = "please enter vaild answer";
  }
}

// oddoreven

function checkoddeven() {
  var number6 = prompt("Enter a number:");
  if (number6 % 2 == 0) {
    alert(number6 + " even");
  } else {
    alert(number6 + " odd");
  }
}

// Leap year or not
function checkleapornot() {
  var number7 = Number(document.getElementById("number7").value);
  if (number7 % 4 == 0 || (number7 % 100 != 0 && number7 % 400 == 0)) {
    alert("The given year is leap year");
  } else {
    alert("The given year is not an leap year");
  }
}

// sides of triangle
function triangle() {
  var number8 = Number(document.getElementById("number8").value);
  var number9 = Number(document.getElementById("number9").value);
  var number10 = Number(document.getElementById("number10").value);
  if (
    number8 + number9 > number10 &&
    number9 + number10 > number8 &&
    number8 + number10 > number9
  ) {
    alert("Valid Triangle");
  } else {
    alert("Invalid Triangle");
  }
}

// factorial
function factorial() {
  var number11 = prompt("Enter a number:");
  let f = 1;
  for (let i = 1; i <= number11; i++) {
    f = f * i;
  }
  alert("factorial is " + f);
}

// palindrome
function palindrome() {
  const str = prompt("Enter string");
  let isPalindrome = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    alert("true");
  } else {
    alert("false");
  }
}

// Users age
function userAge() {
  var number13 = prompt("Enter Age:");
  if (number13 >= 1 && number13 <= 12) {
    alert("You are a Child");
  } else if (number13 >= 13 && number13 <= 19) {
    alert("you are a teenager");
  } else if (number13 >= 20) {
    alert("You are an Adult");
  } else {
    alert("Please Enter Age");
  }
}
