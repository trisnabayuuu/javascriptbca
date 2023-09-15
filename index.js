
function soal1(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j < i; j++) {
            barisPola += "\t";
        }
        barisPola += "*";

        console.log(barisPola);
    }
}




function soal2(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";


        for (let j = 1; j <= baris - i; j++) {
            barisPola += "\t";
        }

        // tanda "*" untuk bagian kanan
        for (let k = 1; k <= 1; k++) {
            barisPola += "*\t";
        }

        console.log(barisPola);
    }
}
function soal3(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j <= baris; j++) {
            if (j === i || j === (baris - i + 1)) {
                barisPola += "*\t";
            } else {
                barisPola += "\t";
            }
        }

        console.log(barisPola);
    }
}

function soal4(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j <= baris; j++) {
            if (j === i || j === baris - i + 1
                || j === Math.ceil(baris / 2) // untuk garis tengah vertical
                || i === Math.ceil(baris / 2)) { //untuk mencetak garis tengah
                barisPola += "*\t";
            } else {
                barisPola += "\t";
            }
        }

        console.log(barisPola);
    }
}

function soal5(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j <= baris; j++) {
            if (
                j === 1 || // baris pertama
                j === baris || // baris terakhir
                i === 1 || // kolom pertama 
                i === baris || // kolom terakhir
                j == i || j == baris - i + 1
            ) {
                barisPola += "*\t";
            } else {
                barisPola += "\t";
            }
        }

        console.log(barisPola);
    }
}

function soal6(baris) {
    for (let i = 1; i <= baris; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*\t");
        }
        console.log();
    }
}
function soal7(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        // Menambahkan spasi untuk bagian kiri
        for (let j = 1; j <= baris - i; j++) {
            barisPola += "\t";
        }

        // Menambahkan tanda "*" untuk bagian kanan
        for (let k = 1; k <= i; k++) {
            barisPola += "*\t";
        }

        console.log(barisPola);
    }

}

function soal8(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j <= baris; j++) {
            if (
                j == i || j == baris - i + 1 ||  //X
                i == 1 || i == 9 || //garis atas dan bawah
                j == Math.ceil(baris / 2) || // garis tengah vertikal
                // bawah
                j == 3 && i == 8 ||
                j == 4 && i == 8 ||
                j == 4 && i == 7 ||
                j == 6 && i == 8 ||
                j == 7 && i == 8 ||
                j == 6 && i == 7 ||

                // atas
                j == 3 && i == 2 ||
                j == 4 && i == 2 ||
                j == 6 && i == 2 ||
                j == 7 && i == 2 ||
                j == 4 && i == 3 ||
                j == 4 && i == 3 
            ) {
                barisPola += "*\t";
            } else {
                
                barisPola += "\t";
            }

        }

        console.log(barisPola);
    }
    // console.log("5");
}

function soal9(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j <= baris; j++) {
            if (
                //kiri
                j === 1 || // baris pertama
                j === baris ||  // baris terakhir
                j === i || j === baris - i + 1 ||
                j ===2 && i === 3||
                j === 2 && i === 4 || 
                j === 3 && i === 4 ||
                j === 2 && i === 6 ||
                j === 3 && i === 6 ||
                j === 2 && i === 7||
                // kanan
                j === 8 && i === 3||
                j === 8 && i === 4||
                j === 7 && i === 4||
                j === 8 && i === 6||
                j === 7 && i === 6||
                j === 8 && i === 7||
                i === Math.ceil(baris / 2) 
            ) {
                barisPola += "*\t";
            } else {
                barisPola += "\t";
            }
        }

        console.log(barisPola);
    }
    // console.log("5");
}

function soal10(baris) {
    for (let i = 1; i <= baris; i++) {
        let barisPola = "";

        for (let j = 1; j <= baris; j++) {
            if (
                i == 6 && j <=5||
                i == 7 && j <=6|| 
                i == 8 && j <=7||
                i == 9 && j <=8
            ) {
                barisPola += "\t";
            } else if (
                j <= i ||
                i === Math.ceil(baris / 2) ||
                j >= 6 && i >= 6
                ) {
                barisPola += "*\t";
            } else {
                barisPola += "\t";
            }{
                
            }
        }

        console.log(barisPola);
    }
}
const n = 9;

console.log("");
console.log("soal 1");
soal1(n);
console.log("");
console.log("soal 2");
soal2(n);
console.log("");
console.log("soal 3");
soal3(n);
console.log("");
console.log("soal 4");
soal4(n);
console.log("");
console.log("soal 5");
soal5(n);
console.log("");
console.log("soal 6");
soal6(n);
console.log("");
console.log("soal 7");
soal7(n);
console.log("");
console.log("soal 8");
soal8(n);
console.log("");
console.log("soal 9");
soal9(n);
console.log("");
console.log("soal 10");
soal10(n)