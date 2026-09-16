const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prima(angka) {
    if (angka < 2) {
        return false;
    }

    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false;
        }
    }

    return true;
}

rl.question("Masukkan n_awal: ", (awal) => {
    rl.question("Masukkan n_akhir: ", (akhir) => {

        awal = Number(awal);
        akhir = Number(akhir);

        let total = 0;

        for (let i = awal; i <= akhir; i++) {
            if (prima(i)) {
                total++;
            }
        }

        console.log("Jumlah bilangan prima =", total);

        rl.close();
    });
});