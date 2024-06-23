// Bubble Sort

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// console.log(bubbleSort([23, 45, 32, 5, 2]));

// Selection Sort

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minNumIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minNumIndex]) {
        minNumIndex = j;
      }
    }
    if (minNumIndex !== i) {
      [arr[minNumIndex], arr[i]] = [arr[i], arr[minNumIndex]];
    }
  }
  return arr;
};
// console.log(selectionSort([1, 2, 23, 45, 32, 5]));

// Insertion Sort

const insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
// console.log(insertionSort([1, 42, 23, 45, 32, 5]));

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArray = mergeSort(arr.slice(0, mid));
  let rightArray = mergeSort(arr.slice(mid));
  return merge(leftArray, rightArray);
}
function merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}
// console.log(mergeSort([1, 42, 23, 45, 32, 5, 10, 2]));

// Merge Intervals with Merge Sort
function mergeIntervals(arr) {
  const startIndex = 0;
  const endIndex = 1;

  arr.sort((a, b) => a[startIndex] - b[startIndex]);

  let mergeStart = arr[0][startIndex];
  let mergeEnd = arr[0][endIndex];

  const mergeIntervals = [];
  for (let i = 1; i < arr.length; i++) {
    let adjacentIndex = arr[i];

    if (adjacentIndex[startIndex] <= mergeEnd) {
      mergeEnd = Math.max(mergeEnd, adjacentIndex[endIndex]);
    } else {
      mergeIntervals.push([mergeStart, mergeEnd]);
      mergeStart = adjacentIndex[startIndex];
      mergeEnd = adjacentIndex[endIndex];
    }
  }
  mergeIntervals.push([mergeStart, mergeEnd]);
  return mergeIntervals;
}

// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// 945. Minimum Increment to Make Array Unique
var minIncrementForUnique = function (nums) {
  const n = Math.max(...nums) + nums.length;
  const newArray = new Array(n).fill(0);

  for (let i = 0; i < nums.length; i++) {
    newArray[nums[i]] += 1;
  }

  let moves = 0;
  for (let i = 0; i < n; i++) {
    if (newArray[i] <= 1) continue;
    let diff = newArray[i] - 1;
    moves += diff;
    newArray[i + 1] += diff;
    newArray[i] -= diff;
  }
  return moves;
};

// console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));

// Quick Sort
// Method 1
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));

// Quick sort
// Method 2
function sortArray(arr) {
  return quickSort2(arr);
}

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSort2(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort2(arr, start, pivotIndex - 1);
    quickSort2(arr, pivotIndex + 1, end);
  }
  return arr;
}
// console.log(sortArray([5, 2, 9, 3, 6, 1, 8, 7]));
