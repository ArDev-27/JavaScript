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
  if (angkot <= aktif) {
    console.log("Angkot No " + angkot + " beroperasi dengan baik");
  } else {
    console.log("Angkot No. " + angkot + " sedang tidak beroperasi.");
  }
}
