// continue ---> skip rest of the code for this iteration
// break ---> i am done with this loop, loop end

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

let n = 0;
while (n < 10) {
  n++;
  if (n % 2 !== 0) {
    continue;
  }

  console.log(n);
}
