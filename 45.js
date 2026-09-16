const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlah = 0;
let totalGanjil = 0;

function inputAngka() {
    rl.question(`Masukkan angka ke-${jumlah + 1}: `, (input) => {
        let angka = Number(input);

        if (angka % 2 !== 0) {
            totalGanjil++;
        }

        jumlah++;

        if (jumlah < 10) {
            inputAngka();
        } else {
            console.log("Jumlah bilangan ganjil =", totalGanjil);
            rl.close();
        }
    });
}

inputAngka();