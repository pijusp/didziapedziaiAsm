// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
const a = 4;
const b = 6;
if (a < b) {
    console.log("b daugiau uz a");
} else if (b < a) {
    console.log("a daugiau uz a");
} else console.log("a ir b yra lygus");
console.log("==========");
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
let s = "";
for (var i = 1; i < 11; i += 1) {
    s += i + " ";
}
console.log(s);
console.log("==========");
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
let t = "";
for (let i = 0; i < 11; i += 2) {
    t += i + " ";
}
console.log(t);
console.log("==========");
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 6) + 1);
}
console.log(arr);
console.log("==========");
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
let num;
let output = "";

while (true) {
    num = Math.floor(Math.random() * 10) + 1;
    output += num + " ";

    if (num === 5) {
        break;
    }
}

console.log(output);
console.log("==========");
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
const arrLength = Math.floor(Math.random() * 11) + 20;

const arr2 = new Array(arrLength);
for (let i = 0; i < arrLength; i++) {
    arr2[i] = Math.floor(Math.random() * 21) + 10;
}

let max = arr2[0];
for (let i = 1; i < arrLength; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
}

console.log(arr2);
console.log("Maximum value:", max);
console.log("==========");
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
const Abcd = "ABCD";

const randomLetters = [...Array(100)].map(
    (_) => Abcd[Math.floor(Math.random() * Abcd.length)]
);

const sumA = randomLetters.reduce(
    (sum, currentEl) => (currentEl === "A" ? sum + 1 : sum),
    0
);

const sumB = randomLetters.reduce(
    (sum, currentEl) => (currentEl === "B" ? sum + 1 : sum),
    0
);

const sumC = randomLetters.reduce(
    (sum, currentEl) => (currentEl === "C" ? sum + 1 : sum),
    0
);

const sumD = randomLetters.reduce(
    (sum, currentEl) => (currentEl === "D" ? sum + 1 : sum),
    0
);

console.log(randomLetters);
console.log(`A raidziu kiekis = ${sumA}`);
console.log(`B raidziu kiekis = ${sumB}`);
console.log(`C raidziu kiekis = ${sumC}`);
console.log(`D raidziu kiekis = ${sumD}`);
console.log("==========");
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(a, b) {
    if (
        (typeof a === "number" && typeof b === "number") ||
        (Array.isArray(a) && Array.isArray(b))
    ) {
        if (typeof a === "number" && typeof b === "number") {
            const sum = a + b;
            if (sum % 2 === 1) {
                return "Suma nelyginė";
            } else {
                return sum;
            }
        }
        if (Array.isArray(a) && Array.isArray(b)) {
            const sum = a.length + b.length;
            if (sum % 2 === 1) {
                return "Suma nelyginė";
            } else {
                return sum;
            }
        }
    }
    return "Netinkami kintamieji";
}
console.log(lygineSuma(3, 6));
console.log(lygineSuma([1, 2, 3], [3, 2, 1]));
console.log(lygineSuma(9, [1, 2, 3]));
console.log("==========");
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
function pirminisSkaicius(n) {
    if (typeof n !== "number") {
        return "Klaida: Ivestas simbolis ne skaicius";
    }

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(pirminisSkaicius(3)); // false
console.log(pirminisSkaicius(2)); // true
console.log(pirminisSkaicius(7)); // true
console.log(pirminisSkaicius(12)); // false
console.log(pirminisSkaicius("hello")); // "Klaida: Ivestas simbolis ne skaicius"
console.log("==========");
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)
function telefonoNumeris(numbers) {
    const numberString = numbers.join("");

    const areaCode = numberString.slice(0, 3);
    const telefonoNumeris = numberString.slice(3);

    return `(${areaCode}) ${telefonoNumeris.slice(
        0,
        3
    )}-${telefonoNumeris.slice(3)}`;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedNumber = telefonoNumeris(numbers);
console.log(formattedNumber); // Atsakymas: "(123) 456-7890"
