var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
}

var jmlOjek = 10;
var ojekOperation = 5;
for (var noOjek = 1; noOjek <= ojekOperation; noOjek++) {
  console.log("Ojek No. " + noOjek + " sedang ngater pelanggan.");
}
for (noOjek = ojekOperation + 1; noOjek <= jmlOjek; noOjek++) {
  console.log("Ojek No. " + noOjek + " sedang magkal nungguin pelanggan.");
}

// error
var jmlGrab = 10;
var grabBeroperasi = 6;

var noGrab = 1;
while (noGrab <= grabBeroperasi) {
  console.log(`Grab No. ${noGrab} sedang beroperasi.`);
  noGrab++;
}

while (grabBeroperasi <= jmlGrab) {
  console.log("Grab No. " + grabBeroperasi + " sedang tidak beroperasi.");
  grabBeroperasi++;
}

var aktif = 6;
var jumlah = 10;
for (var angkot = 1; angkot <= jumlah; angkot++) {
  if (angkot <= aktif && angkot !== 5) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik");
  } else if (angkot === 5||angkot === 8 || angkot === 10) {
    console.log("Angkot No. " + angkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + angkot + " sedang tidak beroperasi.");
  }
}

var numeric = prompt("Enter a number: ");
if (numeric % 2 === 0) {
  alert(numeric + " Even");
} else if (numeric % 2 === 1) {
  alert(numeric + " Odd");
} else {
  alert(numeric + " Not a number!");
}


var num = parseInt(prompt("Enter a number: "));
// if (num == 0) 
if (num === 0) {
  alert("Even");
} else if (num === 1) {
  alert(" Odd");
} else {
  alert("Not a number!");
}
