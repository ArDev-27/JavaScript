var noAngkot = 1;
var jmlAngkot = 10;
while (noAngkot <= jmlAngkot) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}

var motor = 1;
while (motor <= 10) {
  console.log("Motor No." + motor + " berjalan dengan baik");
  motor++;
}

for(var human = 1; human <= 10; human++) {
    console.log(`${human} Human`);
}

alert("Welcome to my site!");

var again = true;
while (again === true) {
  var name = prompt("Enter your name!");
  console.log(name);
  alert("Halo!, " + name);

  again = confirm("You want try again?");
}

alert("Thank You!!");

alert("Start");
for (var a = 0; a < 5; a++) {
  alert("hi!");
}
alert("finish");

var number = prompt("enter your number : ");
if (number % 2 === 0) {
  alert(number + " even");
  console.log(number + " even");
} else {
  alert(number + " odd");
  console.log(`${number} odd`);
}
