// Excercise_1

// // const imie = "Andrzej";
// // console.log(imie);
// // const wiek = 39;
// // console.log(wiek);
// // const ulubiona_potrawa = "bigos";
// // console.log(ulubiona_potrawa);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_2

// const name = "Andrzej";
// const nameDog = "Perys";
// const ageDog = 10;

// console.log(`Cześć jestem ${name}, a to jest ${nameDog} - mój pies`);
// console.log(nameDog + " ma już " + ageDog + " lat");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_3

// Napraw błędy (6 błęów):
// const firstName = 'Tomek'
// let age = 12
// age = 18

// var favColor = 'niebieski'
// const fav-meal = 'schabowy'

// let current.Car
// current.Car = 'Audi'

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive

// let firstName = 'Ania'
// let age2 = 24
// let ulubionyKolor = 'czerwony'

// const firstName = "Tomek";
// let age = 12;
// age = 18;

// const favColor = "niebieski";
// const favMeal = "schabowy";

// let currentCar;
// currentCar = "Audi";

// let firstName2 = "Ania";
// let age2 = 24;
// let favColor2 = "czerwony";

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_4

//     Metody do wykorzystania:
//     charAt()
//     includes()
//     replace()* podchwytliwe 🙂
//     slice()
//     split()
//     toLowerCase()
//     toUpperCase()

// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive

// const text1 = "powiększ mnie!";
// console.log(text1.toUpperCase());

// const text2 = "zapisz mnie małymi literami";
// console.log(text2.toLowerCase());

// const text3 = "@#$%% wytnij te dziwne zanki na początku!";
// console.log(text3.slice(6));

// const text4 = "sprawdź czy zawiera słowo czy";
// console.log(text4.includes("czy"));

// const text5 =
//   'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj';
// console.log(text5.charAt(2));

// const text6 = "pies zamień każde słowo pies, na słowo kot pies";
// console.log(text6.replaceAll("pies", "kot"));

// const text7 = "podziel, ten, string, od, przecinków";
// console.log(text7.split(","));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_5

// const pass = "kjagksaskdjkajsbkd";

// if (pass.length > 10 && pass.includes("!")) {
//   console.log("Masz rewalacyjne hasło");
// } else if (pass.length > 10) {
//   console.log("Masz dobre hasło");
// } else {
//   console.log("Masz za krótkie hasło");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_6

// const day = "sobota";

// switch (day) {
//   case "poniedziałek":
//     console.log("dziś jest poniedziałek");
//     break;

//   case "wtorek":
//     console.log("dziś jest wtorek");
//     break;

//   case "środa":
//     console.log("dziś jest wtorek");
//     break;

//   case "czwartek":
//     console.log("dziś jest wtorek");
//     break;

//   case "piątek":
//     console.log("dziś jest wtorek");
//     break;

//   default:
//     console.log("dziś jest weekend");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_7

// const x = 10;

// if (x > 20) {
//   console.log(x > 20);
// } else {
//   console.log(x < 20);
// }

// // Zwraca true lub false

// const y = 10;

// if (y > 20) {
//   console.log(`${y} > 20`);
// } else {
//   console.log(`${y} < 20`);
// }

// Zwraca 10 < 20

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_8

// const x = 10;

// const newX = (x > 20) ? `${x} > 20` : `${x} < 20`;
// console.log(newX);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_9

// const isLoggedIn = true;

// function LoggedIn() {
//   console.log("Użytkownik jest zalogowany!");
// }

// function LoggedOut() {
//   console.log("Użytkownik nie jest zalogowany!");
// }

// isLoggedIn ? LoggedIn() : LoggedOut();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_10

// const x = 50;
// const y = 30;

// x > y ? console.log(`${x} > ${y}`) : "";

// if (x > y) {
//   console.log(`${x} > ${y}`);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_11

// const color = "blue";
// newColor = "green";

// if (color == newColor) {
//   console.log("Kolory się zgadzają");
// } else {
//   console.log("Kolory się nie zgadzają");
// }

// color == newColor
//   ? console.log("Kolory się zgadzają")
//   : console.log("Kolory się nie zgadzają");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_12

// const x = 100;
// const y = 50;

// if (x > y) {
//   console.log("x > y");
// } else if (x == y) {
//   console.log("x = y");
// } else {
//   console.log("x < y");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_13

// const promo = "50%";

// switch (promo) {
//   case "10%":
//     console.log("Dziś mamy 10% zniżki");
//     break;

//   case "20%":
//     console.log("Dziś mamy 20% zniżki");
//     break;

//   case "30%":
//     console.log("Dziś mamy 30% zniżki");

//   default:
//     console.log(`Dziś mamy ${promo} zniżki`);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_14

// const x = 10;
// if (x % 2 == 0) {
//   console.log("x jest parzyste");
// }

// x % 2 == 0
//   ? console.log("x jest parzyste")
//   : console.log("x nie jest parzyste");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_15

// const x = 50;
// let text;

// if (x >= 100) {
//   text = "x >= 100";
// } else if (x < 100 && x > 30) {
//   text = "x jest średniakiem";
// } else if (x <= 30) {
//   text = "x jest mały";
// }

// console.log(text.toUpperCase());

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_16 Pętla for

// const colors = ["blue", "red", "yellow", "pink", "orange", "green"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_17 Pętla while

// let i = 0;

// while (i < 5) {
//   i++;
//   console.log(i);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_18 Pętla do while

// let i = 0;

// do {
//   i++;
//   console.log(i);
// } while (i < 2);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_19 Pętla for of

// const numbers = [1, 2, 3, 4, 5];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i] * 2);
// // }

// for (const number of numbers) {
//   console.log(number * 2);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_20

// const cities = ["Kraków", "Warszawa", "Poznań", "Wrocław", "Gdynia", "Sopot"];

// for (let i = 0; i < cities.length; i++) {
//   console.log(`to miasto nazywa się ${cities[i].toUpperCase()}`);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_21

// let x = 0;

// while (x < 10) {
//   x += 2;
//   console.log(x);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_22

// let x = 20;

// do {
//   x -= 3;
// } while (x > 0);
// console.log(x);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_23

// const numbers = [5, 8, 10, 23, 48, 60];

// for (let number of numbers) {
//   console.log(number / 5);
// }

// console.log("----------------------------");

// for (const number of numbers) {
//   if (number % 2 == 0) {
//     console.log(
//       `%cliczba ${number} jest parzysta`,
//       "background-color: gold; color: black"
//     );
//   } else {
//     console.log(
//       `%cliczba ${number} jest nie parzysta`,
//       "background-color: tomato; color: black"
//     );
//   }
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_24

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// numbers.unshift(-1, 0);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.push(6, 7, 8);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// unshift - dodaje element na początek tablicy
// shift - usuwa pierwszy element w tablicy
// push - dodaje element na koniec tablicy (metoda destrukcyjna, zmienia oryginalną tablicę)
// pop - usuwa ostatni element z tablicy

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_25

// const numbers = [1, 2, 3, 4, 5];

// function multiply(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(multiply);
// console.log(numbers);
// console.log(newNumbers);

// map() - podobna do pętli, wykonuje jakiś kod na każdym elemencie tablicy
// map() - w nawiasach podajemy nazwę funkcji, której kod ma się wykonać na elmentach tablicy
// map() - zwraca nową tablicę

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_26

// const numbers = [1, 2, 3, 4, 5];

// const abc = ["a", "b", "c"];

// const newAbc = numbers.concat(abc);

// console.log(newAbc);
// console.log(numbers);

// concat() - metoda niedestrukcyjna służąca do połączeń dwóch różnych tablic lub tablicy z różnymi innymi elemenatami

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_27

// const drinks = ["persi", "kawa", "sok"];
// const meals = ["schabowy", "spaghetti", "zupa"];

// const menu = [...drinks, ...meals];

// console.log(...menu);

// ... - wyciąga elemnty z tablicy

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_27

// slice() - metoda niedestrukcyjna (,) pierwszy element od którego wycinamy włącznie, drugi element , do którego wycinamy , ale już bez tego elementu.

// splice() - metoda destrukcyjna (,,,) pierwszy element od którego wycinamy włącznie, drugi element - ilość elemntów które wycinamy, trzeci element - nowy element który chcemy dodać do tablicy w miejsce wyciętego.

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", "true", 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", ":)", "8)"];

// const numbers2 = numbers.slice(0, 2);
// console.log(numbers2);

// const numbers3 = numbers.slice(-3);
// console.log(numbers3);

// const randomStuuf = colors.splice(-2);
// console.log(randomStuuf);
// console.log(colors);

// newCars = cars.splice(2, 4, "test");
// console.log(cars);
// console.log(newCars);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_28

// const numbers = [0, 23, 48, 175, 2, 34, 11];

// function number(x) {
//   return x % 2 === 0;
// }

// console.log(numbers.filter(number));

// numbers.forEach((number) => console.log(number * 5));

// filter - funkcja iterowalna - przechodzi po całej tablicy

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_29

// const letters = ["c", "d"];

// letters.unshift("a", "b");
// letters.push("e", "f");
// console.log(letters);

// console.log(letters.includes("c"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_30

// const numbers = [1, 2, 3];
// const foods = ["hamburger", "pizza", "popcorn"];

// const newArr = numbers.concat(foods);

// const connect = [...numbers, ...foods];
// console.log(connect);
// console.log(newArr);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_31

// const numbers = [1, 5, 13, 26, 48];

// const newNumbers = numbers.map((number) => number * 5);

// console.log(newNumbers);

// for (const number of newNumbers) {
//   if (number % 2 == 0) {
//     console.log(`liczba ${number} jest parzysta`);
//   } else {
//     console.log(`liczba ${number} jest nie parzysta`);
//   }
// }

// for (let i = 0; i < newNumbers.length; i++) {
//   if (newNumbers[i] % 2 == 0) {
//     console.log(`liczba ${newNumbers[i]} jest parzysta`);
//   } else {
//     console.log(`liczba ${newNumbers[i]} jest nie parzysta`);
//   }
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_32

// const colors = ["blue"];

// colors.unshift("orange");
// console.log(colors);

// colors.push("red");
// console.log(colors);

// for (const color of colors) {
//   console.log(color.charAt(0).toUpperCase() + color.slice(1));
// }

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i].charAt(0).toUpperCase() + colors[i].slice(1));
// }

// console.log(`Mój ulubiony kolor to ${colors[1].toUpperCase()}`);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_33

// const cars = "Audi, Mercedes, BMW, Nissan, Dodge";

// const newCars = cars.split(", ");

// console.log(newCars);

// newCars.length > 3 ? console.log("Jest OK") : console.log("Nie jest OK");

// if (newCars.includes("Audi")) {
//   newCars.push("Porsche");
// } else {
//   newCars.pop();
// }

// console.log(newCars);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_34

// function add(name, age) {
//   console.log(`Cześć mam na imię ${name} i mam ${age} lat`);
// }

// add("Andrzej", 39);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_35

// const test4 = (name, age) => console.log(name, age);
// test4("Andrzej", 39);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_36

/*
1. Stwórz zmienną globalną score
2. Stwórz funkcję add, która przyjmie dwa parametry
3. Funkcja ma dodawać elementy. Wynik dziłąnia przypisz do zmiennej score.
4. Stwórz dwie funkcję, które będą zwracały w konsoli zdanie:
    Funkcja #1: Liczba x jest parzysta
    Funkcja #2: Liczba x jest nie parzysta
5. W funkcji add stwórz if'a, który sprawdz, czy score jest parzysta, czy nie. W zależności od wyniku, niech if odpali funkcję #1 lub #2.
6. Na końcu kodu wywołaj funkcję add i przekaż jej dwa dowolne argumenty
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive

// let score;

// const add = (x, y) => {
//   score = x + y;
//   if (score % 2 === 0) {
//     even(score);
//   } else {
//     odd(score);
//   }
// };

// const even = (number) => {
//   console.log(`Liczba ${number} jest parzysta`);
// };

// const odd = (number) => {
//   console.log(`Liczba ${number} jest nieparzysta`);
// };

// add(1, 5);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_37

/*
1. Stwórz zmienne celsius oraz temp
2. Stwórz funkcję fahrenheit, która przyjmie jeden parametr
3. Argument ma zostać przypisany do zmiennej celsius (wewnątrz funkcji)
4. Funkcja ma przekonwertować stopnie C na stopnie F
    Wynik przypisz do zmiennej temp

    Wzór TF = TC x 1.8 + 32

5. Wywołaj funkcję. Podaj dla niej argument(typ number, czyli naszą temperaturę)
6. Wynik wypisz w konsoli za pomocą template stringa XC = YF
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive

// let celsius;
// let temp;

// const fahrenheit = (c) => {
//   celsius = c;
//   temp = celsius * 1.8 + 32;
//   console.log(`${c} stopni celsjusza = ${temp} stopni fahrenheita`);
// };

// fahrenheit(20);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_38

/*
1. Stwóz zmienne num i numbers. Do tej pierwszej przypisz wartość 10, a do drugiej pustą tablicę.
2. Stwórz pętle for, która będzie wykonywała się tak długo, aż i będzie mniejsze od num. Pętla ma dodawać i do tablicy numbers.
3. Stwóz funkcję, która przyjmie jeden parametr. W funkcji ma być if, któy sprawdzi czy liczba podana w argumencie jest podzielna przez 3 oraz jest różna od zera.
    jeśli tak - wypisz w konsoli x jest podzielne przez 3
    jeśli nie - wypisz w konsoli x nie jest podzielne przez 3 lub x = 0
4. Za pomocą forEach odwołaj się do tabllicy numbers.
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive

// const num = 10;
// const numbers = [];

// for (let i = 0; i < num; i++) {
//   numbers.push(i);
// }

// const checkNumbers = (x) => {
//   x % 3 === 0 && x !== 0
//     ? console.log(`${x} jest podzielne pzez 3`)
//     : console.log(`${x} nie jest podzielne przez 3 lub ${x} = 0`);
// };

// numbers.forEach(checkNumbers);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_39

// const heading = document.querySelector("h1");
// console.log(heading);

// const pseudoArray = document.querySelectorAll("p");
// console.log(pseudoArray);

// const d = document.querySelector(".test");
// console.log(d);

// const e = document.querySelector("#test");
// console.log(e);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_40

// const ulList = document.createElement("ul");
// const liItem = document.createElement("li");

// liItem.textContent = "cześć";

// document.body.appendChild(ulList);
// ulList.appendChild(liItem);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_41

// const div = document.querySelector("div");
// const header = document.querySelector("header");

// const p1 = document.createElement("p");
// const p2 = document.createElement("span");

// div.appendChild(p1);
// div.appendChild(p2);

// p1.textContent = "wszystko ok";
// p2.textContent = "póki co ok";

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Excercise_42

// przypisz zmienne p oraz headingTwo do diva

// const div = document.querySelector("div");
// const p = document.createElement("p");
// const headingTwo = document.createElement("h2");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive1

// div.appendChild(headingTwo);
// div.appendChild(p);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recive2

// div.append(headingTwo, p, "czesć");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
