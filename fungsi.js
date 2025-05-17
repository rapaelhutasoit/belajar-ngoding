function helloWorld() {
    return 'Hello World';
} // function ini punya nilai 'Hello World'

console.log(helloWorld);

function test() {
    console.log('test');
}

console.log(test());

// return memberikan nilai ke fungsi, bila tidak memberikan return ke fungsi
// maka fungsi tersebut memiliki nilai undefined

let hello = helloWorld();
let hell1 = 'Hello World';

function tambahAngka (angka1, angka2) { // parameter disini bisa banyak sekali, tergantung kebutuhan
    return angka1 + angka2;
}

console.log(tambahAngka(1, 2));
console.log(tambahAngka(2, 4));
console.log(tambahAngka(3, 6));
console.log(tambahAngka(4, 8));
console.log(tambahAngka()); // misalkan tanpa parameter

let angka5 = tambahAngka(2, 3);
console.log(angka5); 

console.log('');

function balikKata(kata) {
    let balikKata = "";
    for (let i = kata.length - 1; i >= 0; i--) {
        balikKata += kata[i];
    }
    return balikKata;
}

console.log(balikKata("gajah"));
console.log(balikKata("kucing"));
console.log(balikKata("katak"));
console.log(balikKata("jerapah"));

function nambahinHurufBesarSetelahSpasi(kata) {
    let result = "";
    for (let i = 0; i < kata.length; i++) {
        if ((i === 0 || kata[i - 1] === ' ')) {
            result += kata[i].toUpperCase();
        } else {
            result += kata[i];
        }
    }
    return result;
}

console.log(nambahinHurufBesarSetelahSpasi("bryan dewa wicaksana"));
console.log(nambahinHurufBesarSetelahSpasi("faisal firdani"));
console.log(nambahinHurufBesarSetelahSpasi("dimas kusuma"));