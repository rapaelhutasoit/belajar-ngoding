// while ()
// for ()

// let i = 5;
// while (i > 5) {
//     console.log(i);
//     i++;
// }

// dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan, kanan itu pertambahan
// hati hati akan infinite loop, atau loopnya tidak akan jalan

// for (let i = 1; i >= 0; i --) {
//     console.log(i);
// }

// let name = "bryan";

// ada yang namanya method length untuk tipe data string dan array
// method mengembalikan nilai angka, total huruf yang ada pada string, atau total element yang ada pada array

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// oke jadi, pada tipe data string atau array di javascript, ada yang namanya indexing
// dimana index itu SUDAH PASTI berawal dari 0

// console.log(name[0] + name[5]);

// diberikan kasus untuk membalikkan suatu kata, tanpa menggunakan methode reverse

// let name = "agus"; // length 4, sedangkan index itu dari 0, a -> 0, g -> 1, u -> 2, s -> 3
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) { // i = 4 -1; i >= 0, i--
//     result += name[i]; // s => su => sug => suga
//     // ada perintah lagi,
// }
// console.log(result);

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log(j);
//     }
//     console.log("");
// }
// console.log("selesai");

// kesimpulan looping sering bertemu dengan method length
// looping itu agar membuat code lebih pendek
// looping itu agar membuat proses menjadi dinamis

// counter pada looping

// let i = 0; // i adalah counternya

// while (i < 100) {
//     console.log(i);
//     i += 5; // disini counternya ditentukan besarnya berapa
// }

// let i = 0;

// disini kita akan belajar menggabungkannya dengan if else
// while (i < 50) {
//     // disini kita akan mencari ganjil atau genap
//     if (i % 2 === 0) {
//         console.log(`${i} adalah genap`);
//     } else {
//         console.log(`${i} adalah ganjil`);
//     }
//     i++;
// }

// simpelnya operator modulus adalah sisa bagi
// misal 3/2 hasilnya akan koma, dan kalau 3 % 2 hasilnya akan 1
// maka bisa dibilang apapun angkanya kalau di modulus apapun itu angkanya juga dan hasilnya adalah 0
// maka itu adalah kelipatannya
// contoh n % 3 === 0 // maka ini adalah kelipatan 3
// contoh n % 5 === 0 // maka ini adalah kelipatan 5
// contoh n % 5 === 0 // maka ini adalah kelipata 2, dan kebetulan 2 bisa menentukan ganjil atau genap

// problem fizzBuzz
// jika i adalah kelipatan 3 maka tampilkan fizz
// jika i adalah kelipatan 5 maka tampilkan buzz
// jika i adalah kelipatan 3 dan sekaligus 5 maka tampilkan fizzBuzz
// jika bukan kelipatan diatas maka tampilkan angka
// for (let i = 1; i < 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) { // bisa juga (i % 15 === 0) karna KPK dari 3 dan 5 adalah 15
//         console.log("fizzBuzz");
//     } else if (i % 3 === 0 && i % 5 !== 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// disini kalian harus coba coba iseng ubah conditional statmentnya
// demi pemahaman yang lebih lanjut

// dalam looping ada yang namanya break dan continue

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}