const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat: ", function (kalimat) {

    let jumlahKarakter = kalimat.length;

    console.log("Jumlah karakter:", jumlahKarakter);

    rl.close();
});