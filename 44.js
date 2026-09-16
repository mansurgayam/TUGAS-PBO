const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlah = 0;
let totalGenap = 0;

function inputAngka() {
    rl.question(`Masukkan angka ke-${jumlah + 1}: `, (input) => {
        let angka = Number(input);

        if (angka % 2 === 0) {
            totalGenap++;
        }

        jumlah++;

        if (jumlah < 10) {
            inputAngka();
        } else {
            console.log("Jumlah bilangan genap =", totalGenap);
            rl.close();
        }
    });
}

inputAngka();