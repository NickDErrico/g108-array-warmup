// function isArray(data) {
//   if (Array.isArray(data)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
//
// isArray(["not an array"]);

// function cloneArray(arr) {
//   var newArr = arr;
//   console.log(newArr);
// }
//
// cloneArray([1, 2, 3, 4]);

// function first(arr) {
//   let firstEle = arr[0];
//   console.log(firstEle);
// }
//
// first([[1, 2, 3], 4, 5, 6]);

// function last(arr) {
//   console.log(arr[arr.length - 1]);
// }
//
// last([1, 2, 3, 4]);

// function arrayToString(arr) {
//   var split = arr.join();
//   console.log(split);
// }
//
// arrayToString(["hello", "my", "name", "is"]);

function swapCase(str) {
  var opposite = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      opposite += str[i].toUpperCase();
    } else {
      opposite += str[i].toLowerCase();
    }
  }
  console.log(opposite);
}

swapCase("The Quick Brown Fox");
