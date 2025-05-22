// function close10(a, b) {
//   if ((a, b)) {
//     return Math.abs(a - 10) || Math.abs(b - 10);
//   } else if (Math.abs(a - 10) || Math.abs(b - 10)) {
//     return 0;
//   }
// }

// console.log(close10(7, 15));


// for (i = 1; i > 10; i++) {
//   if (i **2) {
//     console.log(i)
//   }
// }
// function stringE(str) {
//   let wordsE = str.split("").filter((word) => word === "e");

//   if (wordsE.length >= 1 && wordsE.length <= 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(stringE("Heello"));


let user = {
    name: "John",
    age: 30,
};

for (let key in user) {
    console.log(key + user[key]);
}
