const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah angka (minimal 10): ", function(n) {
    n = parseInt(n);

    let terkecil = Infinity;
    let i = 1;

    function inputAngka() {
        if (i <= n) {
            rl.question(`Masukkan angka ke-${i}: `, function(input) {
                let angka = parseInt(input);

                if (angka < terkecil) {
                    terkecil = angka;
                }

                i++;
                inputAngka();
            });
        } else {
            console.log("Bilangan terkecil adalah: " + terkecil);
            rl.close();
        }
    }

    inputAngka();
});
