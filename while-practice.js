/***

1. "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
2. Find all the odd numbers from 61 to 100.
3. Find all the even numbers from 78 to 98.
4. Display sum of all the odd numbers from 91 to 129.
5. Display sum of all the even numbers from 51 to 85.
6. Generate a multiplication table for number 9
7. Implement a countdown timer that counts down from 81 to 65.

 */

// 1. "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

// let message = "I will invest at least 6 hrs every single day for next 60 days!";
// let i = 1;
// while (i <= 60) {
//   console.log( i, "=", message);
//   i++;
// }
// 2. Find all the odd numbers from 61 to 100.

// let i = 61;
// while (i <= 100) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// 3. Find all the even numbers from 78 to 98.

// let i = 78;
// while (i <= 98) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// 4. Display sum of all the odd numbers from 91 to 129.

// let i = 91;
// let sum = 0;
// while (i <= 129) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//     console.log(i, sum);
//   }
//   i++;

// }
// console.log('sum of all the odd numbers from 91 to 129 is = ', sum);

// 5. Display sum of all the even numbers from 51 to 85.

// let i = 51;
// let sum = 0;
// while (i <= 85) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//     console.log(i, sum);
//   }
//   i++;

// }
// console.log('sum of all the even numbers from 51 to 85 is = ', sum);

// 6. Generate a multiplication table for number 9


// let num = 9;
// let multi = 1;
// let i = 1;
// while (i <= 10) {
//   multi = num * i;
//   console.log(i, "x 9 = ", multi);
//   i++;
// }
// console.log("multiplication table for number 9 = ", multi);

// 7. Implement a countdown timer that counts down from 81 to 65.

let i = 81;
while (i >= 65) {
  console.log(i);
  i--;
}
