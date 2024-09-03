/* 

1. Write a loop 1 to 200. Use break to exit the loop once you find 100.

2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

*/

// 1. Write a loop 1 to 200. Use break to exit the loop once you find 100.
for (let i = 1; i <= 200; i++) {
  //console.log(i);
  if (i === 100) {
    break;
  }
  //console.log(i);
}

// 2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let num = 1;
while (num <= 110) {
  //console.log(num);

  num++;
  if (num === 100) {
    break;
  }
  //console.log(num);
}

// 3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 1; i <= 100; i++) {
  //console.log(i);
  //let j = Math.sqrt(i);
  let sqrt = Math.sqrt(i);

  if (sqrt * sqrt == i) {
    //console.log(sqrt);
    break;
  }
}
