let posisi = 0;

function maju() {
    console.clear();

    console.log("\n\n\n\n\n" + " ".repeat(posisi) + "0");

    posisi++;

    if (posisi <= 20) {
        setTimeout(maju, 200);
    } else {
        posisi = 20;
        setTimeout(mundur, 200);
    }
}

function mundur() {
    console.clear();

    console.log("\n\n\n\n\n" + " ".repeat(posisi) + "0");

    posisi--;

    if (posisi >= 0) {
        setTimeout(mundur, 200);
    }
}

maju();
