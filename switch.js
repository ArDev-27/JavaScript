var angka = parseInt(prompt("Enter a Number: "));

switch (angka) {
  case (2, 4, 6, 8):
    console.log("Even");
    break;
  case (1, 3, 5, 7, 9):
    console.log("odd");
    break;
  default:
    console.log(NaN);
    break;
}

var food = prompt(
  "Masukkan nama makanan / minuman : \n(Example: Nasi, Susu, Daging, Burger, Sate, coke.) "
);

switch (food) {
  case "nasi":
  case "susu":
  case "daging":
    console.log("Healty food");
    break;
  case "burger":
  case "sate":
  case "coke":
    console.log("Junk Food");
    break;
  default:
    console.log("not a list drink or food");
    break;
}

var s = "";
for (var i = 0; i < 10; i++) {
  for (var k = 0; k <= i; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

var q = "";
for (var w = 10; w >= 0; w--) {
  for (var e = 0; e < w; e++) {
    q += "*";
  }
  q += "\n";
}
console.log(q);
