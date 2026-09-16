const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", (awal) => {
    rl.question("Masukkan n_akhir: ", (akhir) => {

        awal = Number(awal);
        akhir = Number(akhir);

        let total = 0;

        for (let i = awal; i <= akhir; i++) {
            if (i % 2 === 0) {
                total++;
            }
        }

        console.log("Total bilangan genap =", total);

        rl.close();
    });
});