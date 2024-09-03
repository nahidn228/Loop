// //even number

// for (i = 0; i <= 20; i++) {
//   console.log(i);
//   i++;
// }
// //odd number

// for (i = 1; i <= 20; i++) {
//   console.log(i);
//   i++;
// }

//even number

// for (i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//odd number
// for (j = 1; j <= 20; j++) {
//   if (j % 2 !== 0) {
//     console.log(j);
//   }
// }

//give me the list of the numbers which is divided by 3

// for (n = 1; n <= 30; n++) {
//   if (n % 3 === 0) {
//     console.log(n);
//   }
// }

//give me the list of the numbers which is divided by 5

// for (n = 1; n <= 30; n++) {
//   if (n % 5 === 0) {
//     console.log(n);
//   }
// }

//give me the list of the numbers which is divided by 5 and 3

// for (n = 1; n <= 30; n++) {
//   if (n % 5 === 0 || n % 3 === 0) {
//     console.log(n);
//   }
// }

//give me the sum of the numbers 1 to 20, that are divisible 3
let sum = 0;
for (n = 1; n <= 20; n++) {
  if (n % 3 === 0) {
    //sum = sum + n;
    sum += n;
    console.log("total", sum);
  }
}
console.log("sum of the numbers 1 to 20, that are divisible 3 is = ", sum);
