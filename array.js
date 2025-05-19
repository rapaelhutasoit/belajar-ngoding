// let array = [1,2,3,4,5,6];
// console.log(array);

// pada array kalian bisa menampung banyak data dan tipe data yang berbeda

// let array2 = [1, "abc", [1,2,3], {nama: 'test'}, null, false];
// console.log(array2)
// cuma ini contoh yg ga mungkin ada, namun array bisa menampung kayak diatas

// array itu ada 2 jenis
// array 1 dimensi dan array 2 dimensi

let dimensi1 = [1,2,3,4,5,6]; // dimensi 1
let dimensi2 = [[1,2,3], [4,5,6]]; // dimensi 2

// cara mengakses array
// gunakan indeks

console.log(dimensi1[2]); // 3
console.log(dimensi1[4]); // 5

console.log(dimensi2[0]); // [1,2,3]
console.log(dimensi2[1]); // [4,5,6]
console.log(dimensi2[2]);

console.log(dimensi2[0][0]); //1
console.log(dimensi2[1][2]); //6

// cara untuk looping pada array 2 dimensi
console.log("array ada dibawah")
for (let i = 0; i < dimensi2.length; i++) {
    for (let j = 0; j < dimensi2[i].length; j++) {
        console.log(dimensi2[i][j]);
    }
}

// normalnya array 2 dimensi sering digunakan pada kasus tabel
/* 
[
    ["rapael", "indonesia", "21 tahun"],
    ["john", "inggris", "25 tahun"]
]
*/

let orang = [
    ["rapael", "indonesia", "21 tahun"],
    ["john", "inggris", "25 tahun"]
];

console.log("biodata orang")
for (let i = 0; i < orang.length; i++) {
    for (let j = 0; j < orang[i].length; j++) {
        if (j === 0) {
            console.log(`nama: ${orang[i][j]}`);
        } else if (j === 1) {
            console.log(`lokasi: ${orang[i][j]}`);
        } else {
            console.log(`umur: ${orang[i][j]}`);
        }
    }
    console.log('');
}

console.log('')
