let posisi = 0;

function turun() {
    console.clear();

    console.log("\n".repeat(posisi) + " ".repeat(20) + "0");

    posisi++;

    if (posisi <= 10) {
        setTimeout(turun, 200);
    } else {
        posisi = 10;
        setTimeout(naik, 200);
    }
}

function naik() {
    console.clear();

    console.log("\n".repeat(posisi) + " ".repeat(20) + "0");

    posisi--;

    if (posisi >= 0) {
        setTimeout(naik, 200);
    }
}

turun();
