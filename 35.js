let posisi = 0;

function animasi() {
    console.clear();

    console.log(" ".repeat(posisi) + "0");

    posisi++;

    if (posisi <= 20) {
        setTimeout(animasi, 200);
    } else {
        posisi = 20;
        balik();
    }
}

function balik() {
    console.clear();

    console.log(" ".repeat(posisi) + "0");

    posisi--;

    if (posisi >= 0) {
        setTimeout(balik, 200);
    }
}

animasi();

