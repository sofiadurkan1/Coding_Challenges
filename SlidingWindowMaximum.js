//Given an array of integers and a number k, where 1 <= k <= length of the array, compute the
//maximum values of each subarray of length k.

//Example output

// given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8],
// since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

const k = 3;

function maxNumberArr(arr) {
  let result = [];

  for (i = 0; i < arr.length - (k - 1); i++) {
    //

    result.push(Math.max(...arr.slice(i, i + k)));

    //Math max array almiyor, ...args aliyor.

    // Math.max([2,4,7,8])//max(...values: number[]): number
  }
  return result;
}
console.log(maxNumberArr([10, 5, 2, 7, 8, 7]));
