export const SUMS = {
    1: [[1]],
    2: [[2]],
    3: [[1,2], [3]],
    4: [[1,3], [4]],
    5: [[2,3], [1,4], [5]],
    6: [[2,4], [1,5], [6]],
    7: [[1,6], [2,5], [3,4], [1,2,4], [7]],
    8: [[1,7], [3,5], [2,6], [1,2,5],[1,3,4],[8]],
    9: [[1,2,6], [1,3,5], [1,8], [2,3,4], [2,7], [3,6],[4,5],[9]],
    10:[[1,2,3,4], [1,2,7], [1,3,6], [1,4,5], [1,9], [2,3,5], [2,8], [3,7], [4,6]],
    11: [[1,2,3,5],[1,2,8],[1,3,7],[1,4,6],[2,3,6],[2,4,5],[2,9],[3,8],[4,7],[5,6]],
    12: [[1,2,3,6], [1,2,4,5], [1,2,9],[1,3,8],[1,4,7],[1,5,6],[2,3,7],[2,4,6],[3,4,5],[3,9],[4,8],[5,7]]
}

// all these sums were worked out using the below function 
// if we wanted to expand the amount of dice or the amount of tiles 
// in the game we could make something a bit more pliable
// but for now we don't, so I won't :P

// function subsetSum(numbers, target, partial) {
//     var s, n, remaining;
  
//     partial = partial || [];
  
//     // sum partial
//     s = partial.reduce(function (a, b) {
//       return a + b;
//     }, 0);
  
//     // check if the partial sum is equals to target
//     if (s === target) {
//       console.log("%s=%s", partial.join("+"), target)
//     }
  
//     if (s >= target) {
//       return;  // if we reach the number why bother to continue
//     }
  
//     for (var i = 0; i < numbers.length; i++) {
//       n = numbers[i];
//       remaining = numbers.slice(i + 1);
//       subsetSum(remaining, target, partial.concat([n]));
//     }
//   }

//   const numbers = [1,2,3,4,5,6,7,8,9];

//   subsetSum(numbers, 1);
//   subsetSum(numbers, 2);
//   subsetSum(numbers, 3);
//   subsetSum(numbers, 4);
//   subsetSum(numbers, 5);
//   subsetSum(numbers, 6);
//   subsetSum(numbers, 7);
//   subsetSum(numbers, 8);
//   subsetSum(numbers, 9);
//   subsetSum(numbers, 10);
//   subsetSum(numbers, 11);
//   subsetSum(numbers, 12);


  