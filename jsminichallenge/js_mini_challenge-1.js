//Problem 1
var num1 = 3;
var num2 = 4;
console.log(num1 + num2);

var str1 = "Hello ";
var str2 = "Ryan";
console.log(str1 + str2);

//Problem 2
favThings = [
  ["cats", "giraffes", "dogs"],
  ["computers", "video games", "sleeping"]
  ];
console.log(favThings[0][1]);
console.log(favThings[1][2]);

//Problem 3
  if (num3 < 100) {
    alert("The number is less than 100");
  } else if (number > 100) {
    alert("The number " + num3 + " is greater than 100");
  } else {
    alert("Your input of " + num3 +  " is not a valid number");
  }

//Problem 4
function enterName(name) {
  console.log("You have entered the name " + name);
}

enterName("ryan");

//Problem 5
function prizeDoor(door) {
  if (door == 1) {
    console.log("You have selected door " + door + " and you won a car");
  } else if (door == 2 ) {
    console.log("You have selected door " + door + " and you won a boat");
  } else if (door == 3) {
    console.log("You have selected door " + door + " and you won a millon dollars");
  } else {
    console.log("Door number " + door + " is invalid");
  }
};

prizeDoor(3);
