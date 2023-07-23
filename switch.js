var angka = parseInt(prompt("Enter a Number: "));

switch (angka) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log(NaN);
    break;
}

var food = prompt(
  "Masukkan nama makanan / minuman : \n(Example: Nasi, Susu, Daging, Burger, Sate, coke.) "
);

switch (food) {
  case 'nasi':
  case 'susu':
  case 'daging':
    alert("Healty food");
    break;
  case 'burger':
  case 'sate':
  case 'coke':
    alert("Junk Food");
    break;
  default:
    alert("not a list drink or food");
    break;
}
