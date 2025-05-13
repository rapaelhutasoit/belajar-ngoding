// var nama = "Budi";
// var umur = 25;

// let skor = 0;
// skor = 10;

// const PI = 3.14;
// // PI = 3.15;

// let totalHarga = 0;
// const PAJAK = 0.1;

// function hitungTotal(harga) {
//     totalHarga = harga + (harga * PAJAK);
//     return totalHarga;
// }

// // global scope
// // var globalVar = "Bisa diakses dimana saja";
// // let globalLet = "Ini juga global";

// // function contohFungsi() {
// //     console.log(globalVar); // bisa diakses
// //     console.log(globalLet);
// // }

// // local / function scope
// // function contohFungsi() {
// //     // Variable local hanya bisa diakses dalam fungsi ini
// //     var lokalVar = "Hanya dalam fungsi ini";
// //     let lokalLet = "Juga hanya dalam fungsi ini";

// //     console.log(lokalVar); // bisa diakses
// //     console.log(lokalLet); // juga bisa diakses
// // }
// // console.log(lokalVar); // Error! tidak bisa diakses di luar fungsi

// // block scope (khusus untuk let dan const)

// // console.log(contohFungsi());

// if (true) {
//     let blockVar = "Hanya dalam block";
//     const blockConst = "Juga hanya dalam block";
//     var notBlockVar = "Bisa diakses di luar block";
// }

// // console.log(blockVar); // Error!
// // console.log(blockConst); // Error!
// // console.log(notBlockVar); // bisa diakses

// // var bisa diakses sebelum deklarasi (hoisting)
// console.log(varVariable); // undefined
// var varVariable = "test";

// // let dan const tidak bisa diakses sebelum deklarasi
// console.log(letVariable);
// let letVariable = "test";

// logging
// logging dalam javascript adalah cara untuk menampilkan informasi, data, atau pesan untuk keperluan debugging dan monitoring

// console.log("Pesan biasa");
// console.log("User: ", { nama: "Budi", umur: 25});

// console.error("Terjadi kesalahan");

// console.warn("Peringatan: Data belum lengkap");

// console.info("Aplikasi berhasil dimuat");

// const users = [
//     { nama: "Budi", umur: 25 },
//     { nama: "Ani", umur: 23 }
// ];
// console.table(users);

// console.group("User Detail");
// console.log("Nama: Budi");
// console.log("Umur: 25");
// console.groupEnd();

// console.time("Loop");
// for(let i = 0; i < 10000000; i++) {
//     // proses
// }
// console.timeEnd("Loop");

// function hitungTotal(harga, jumlah) {
//     console.log("Input:", { harga, jumlah});

//     const total = harga * jumlah;
//     console.log("Total:", total);

//     if (total > 1000000) {
//         console.warn("Tranksaksi besar terdeteksi");
//     }
//     return total;
// }

// // Tipe data primitif
// // String - untuk teks
// let nama = "Budi";
// let pesan = "Halo";

// // Number - untuk angka (integer dan decimal)
// let umur = 25;
// let tinggi = 1.75;

// // Boolean - true/false
// let aktif = true;
// let menikah = false;

// // Undefined - variable yang belum diberi nilai
// let alamat;
// console.log(alamat);

// // Null - nilai kosong yang disengaja
// let dataSiswa = null;

// // Symbol - nilai unik dan immutable
// const id = Symbol('id');

// console.log(nama);
// console.log(pesan);

// console.log(umur);
// console.log(tinggi);

// console.log(aktif);
// console.log(menikah);

// console.log(dataSiswa);

// console.log(id);

// Tipe data referensi
// Array - kumpulan data terurut
// let buah = ["Apel", "Jeruk", "Mangga"];
// console.log(buah);

// // Object - kumpulan property dan value
// let siswa = {
//     nama: "Budi",
//     umur: 25,
//     aktif: true
// };
// console.log(siswa);

// // Function - blok kode yang bisa dipanggil
// function sapaan(nama) {
//     return `Halo ${nama}!`;
// }

// console.log(sapaan("Rapael"));

// // type checking
// // menggunakan typeof
// console.log(typeof "Budi"); // "string"
// console.log(typeof 25); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (ini adalah bug/quirk JavaScript)
// console.log(typeof []); // "object"
// console.log(typeof {}); // "object"
// console.log(typeof function(){}); // "function"

// // String ke Number
// let angka = Number("123"); // 123
// let text = String(123); // "123"
// // console.log(typeof angka);
// console.log(angka);
// // console.log(typeof text);
// console.log(text);

// // Ke Boolean
// let bool1 = Boolean(1); // true
// let bool2 = Boolean(""); // false
// console.log(bool1);
// console.log(bool2);

// Autiomatic conversion
// let hasil = "5" + 2; // "52" (string)
// let hasil2 = "5" - 2; // 3 (number)
// console.log(hasil);
// console.log(hasil2);

// // contoh best practice
// let produk = {
//     nama: "Laptop", // string
//     harga: 15000000, // number
//     stok: 5,        // number
//     spesifikasi: ["i7", "16GB RAM"], // array
//     tersedia: true,                 // boolean
//     getinfo: function() {           // function
//         return `${this.nama} - Rp${this.harga}`;
//     }
// };

// // Menggunakan berbagai tipe data
// if (produk.stok > 0 && produk.tersedia) {
//     console.log(produk.getinfo());
//     console.log("Spesifikasi:", produk.spesifikasi.join(", "));
// }

// // Strings type
// let teks = "Hello World";

// // Mengakses karakter dengan index
// console.log(teks[0]); // "H"
// console.log(teks[6]); // "W";
// console.log(teks[10]); // "d";

// // Mencoba mengubah karakter (tidak akan berhasil karena immutable);
// teks[0] = "J"; // Tidak akan mengubah string
// console.log(teks); // Tetap "Hello World"

// let nama = "Budi Santoso";
// console.log(nama.length); // 12

// // Mengakses karakter terakhir
// console.log(nama[nama.length - 1]); // o

// let kalimat = "Belajar Javascript";

// // Mengambil substring
// console.log(kalimat.substring(0, 7)); // "Belajar";

// // Mengubah case
// console.log(kalimat.toUpperCase()); // "BELAJAR JAVASCRIPT"
// console.log(kalimat.toLowerCase()); // "belajar javascript"

// // Mencari posisi substring
// console.log(kalimat.indexOf("Javascript")); // 8

// let nama = "Budi";
// let umur = 25;

// // Template literal memungkinkan ekspansi variabel dan multiple line
// let profil = `Nama: ${nama}
// Umur: ${umur} tahun`;

// console.log(profil);
// // Output:
// // Nama: Budi
// // Umur: 25;

// let kata = "Indonesia";

// // Menghitung jumlah vokal
// let jumlahVokal = 0;
// for(let i = 0; i < kata.length; i++) {
//     if("aiueoAIUEO".includes(kata[i])) {
//         jumlahVokal++;
//     }
// }
// console.log(`Jumlah vokal: ${jumlahVokal}`); // 5

// // Deklarasi number
// let bilBulat = 42; // integer
// let bilDesimal = 3.14; // floating-point
// let negatif = -17; // bilangan negatif
// let eksponensial = 2e5; // 200000 (notasi eksponensial)

// // console.log(bilBulat);
// // console.log(typeof bilBulat); // number
// // console.log(bilDesimal);
// // console.log(typeof bilDesimal); // number
// // console.log(negatif);
// // console.log(typeof negatif); // number
// // console.log(eksponensial);
// // console.log(typeof eksponensial); // number

// // Operator aritmatika dasar
// let a = 10;
// let b = 3;

// console.log(a + b); // 13 (penjumlahan)
// console.log(a - b); // 7 (pengurangan)
// console.log(a * b); // 30 (perkalian)
// console.log(a / b); // 3.3333333333333335 (pembagian)
// console.log(a % b); // 1 (modulus/sisa pembagian)
// console.log(a ** b); // 1000 (pangkat)

// // Increment & Decrement
// let counter = 5;

// // Increment (menambah 1)
// counter++; // counter = counter + 1
// console.log(counter); // 6

// // Decrement (mengurangi 1)
// counter--; // counter = counter - 1
// console.log(counter); // 5

// Menggunakan Math object
// console.log(Math.round(3.7)); // 4 (pembulatan ke terdekat)
// console.log(Math.floor(3.7)); // 3 (pembulatan ke bawah)
// console.log(Math.ceil(3.2)); // 4 (pembulatan ke atas)
// console.log(Math.abs(-5)); // 5 (nilai absolut)
// console.log(Math.sqrt(16)); // 4 (akar kuadrat)
// console.log(Math.min(2, 5, 1)); // 1 (nilai terkecil)
// console.log(Math.max(2, 5, 1)); // 5 (nilai terbesar)

// // Nilai khusus
// console.log(Infinity); // representasi tak hingga
// console.log(-Infintiy); // negatif tak hingga
// console.log(NaN); // Not A Number (hasil operasi yang tidak valid)

// // Contoh yang menghasilkan NaN
// console.log(0/0); // NaN
// console.log(parseInt("hello world")) // NaN

// let stringAngka = "123";
// let desimalString = 3.14;

// console.log(Number(stringAngka)); // 123
// console.log(parseInt(stringAngka)); // 123
// console.log(parseFloat(desimalString)); // 3.14
// console.log(+'123'); // 123 (cara cepat dengan operator +)

// console.log(0.1 + 0.2); //0.30000000000000004
// // solusi: gunakan toFixed() atau kalikan dengan 100 saat perhitungan
// console.log((0.1 + 0.2). toFixed(2)); // "0.30"

// Conditional Statements
// let usia = 18;
// if (usia >= 17) {
//     console.log("Anda sudah bisa membuat KTP");
// }

// let nilai = 75;
// if (nilai >= 60) {
//     console.log("Anda Lulus");
// } else {
//     console.log("Anda perlu mengulang");
// }

// let cuaca = "hujan";
// if (cuaca === "cerah") {
//     console.log("Waktunya piknik");
// } else if (cuaca === "mendung") {
//     console.log("Bawalah payung");
// } else if (cuaca === "hujan") {
//     console.log("Tetap di dalam ruangan");
// } else {
//     console.log("Cuaca tidak dapat diprediksi");
// }

// let umur = 20;
// let status = umur >= 18 ? "dewasa" : "remaja";
// console.log(status);

// let hari = "Minggu";
// switch(hari) {
//     case "Senin":
//         console.log("Awal minggu");
//         break;
//     case "Jumat":
//         console.log("Akhir minggu kerja");
//         break;
//     case "Sabtu":
//         console.log("Libur kerja");
//         break;
//     case "Minggu":
//         console.log("Libur kerja");
//     default:
//         console.log("Hari biasa");
// }

// Logic Operator
// AND harus keduanya true
let usia = 25;
let punyaSIM = true;

// Memeriksa apakah seseorang boleh mengemudi
if(usia >= 17 && punyaSIM) {
    console.log("Anda boleh mengemudi");
} else {
    console.log("Anda belum boleh mengemudi");
}

// AND juga bisa digunakan untuk lebih dari dua kondisi
let saldo = 1000000;
let verifikasi = true;
let limitHarian = false;

if(saldo >= 500000 && verifikasi && !limitHarian) {
    console.log("Tranksaksi dapat diproses");
} else {
    console.log("Tranksaksi gagal");
}

// OR salah satu harus true
let metodePembayaran = "transfer";

// Memeriksa metode pembayaran
if (metodePembayaran === "transfer" || metodePembayaran === "kartu kredit" || metodePembayaran === "e-wallet") {
    console.log("Metode pembayaran diterima")
}

// OR berguna untuk nilai default
let namaPengguna = "Rapael";
let displayName = namaPengguna || "Tamu"; // jika namaPengguna kosong, gunakan "Tamu"
console.log(displayName);

// NOT membalikkan nilai boolean
let sistemMaintenance = false;

// Memetiksa apakah sistem bisa diakses
if (!sistemMaintenance) {
    console.log("Sistem dapat diakses");
}

// NOT sering digunakan untuk memeriksa data yang tidak ada
let data = null;
if (!data) {
    console.log("Data tidak ditemukan");
}

// mengkombinasikan operator logika
let cuaca = "cerah";
let waktu = "pagi";
let akhirPekan = true;

// Mengkondisikan beberapa kondisi
if ((cuaca === "cerah" || cuaca === "berawan" && waktu === "pagi" && akhirPekan)) {
    console.log("Waktu yang tepat untuk jogging");
}

// JavaScript juga memiliki konsep "short-circuit evaluation yang penting untuk dipahami"

// AND menghentikan evaluasi saat menemukan nilai false
console.log(false && console.log("Tidak akan dicetak")); // false

// OR menghentikan evaluasi saat menemukan nilai true
console.log(true || console.log("Tidak akan dicetak")); // true

// Ini sering digunakan untuk pengecekan nilai null/undefined
let user = {
    nama: "Budi",
    settings: null
};

// Hanya mengakses preference jika settings ada
let tema = user.settings && user.settings.preference;

