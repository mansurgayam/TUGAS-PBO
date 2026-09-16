let posisi = 0;

function animasi() {
    console.clear();

    console.log("\n".repeat(posisi) + "0");

    posisi++;

    if (posisi <= 10) {
        setTimeout(animasi, 200);
    }
}

animasi();
