alert("Welcome to my site!");
var again = true;

while (again === true) {
  var name = prompt("Enter your name!");
  alert("Halo!, " + name)

  again = confirm("You want try again?");
}

alert("Thank You!!");


alert('Start');
for(var a = 0; a < 5; a++) {
    alert('hi!');
}
alert('finish');


var number = prompt('enter your number : ');
if( number % 2 === 0 ) {
    alert(number + ' even');
} else {
    alert(number + ' odd');
}