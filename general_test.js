function reverseString(str) {
  let length = str.length;
  let newStr = '';

  for (var i = 1; i <= str.length; i++) {
    newStr += str[length-i];
  };

  return newStr;
  // time complexity: O(n)
  // space complexity: O(n)
}

function checkPerfectSquare(num) {
  const squareRoot = Math.floor(num ** 0.5);

  return squareRoot ** 2 === num;
  // time complexity: O(1)
  // space complexity: O(1)
}

function mergeIntervals(intervalSet, intervalToMerge) {
  let result = [];
  intervalSet.forEach(el => {
    if (result.length === 0) {
      if (el[0] < intervalToMerge[0]) {
        result.push(el);
      } else {
        result.push(intervalToMerge);
      }
    }
    if (el[0] > result[result.length-1][1]) {
      result.push(el);
    } else if (el[0] > result[result.length-1][0] && el[1] > result[result.length-1][1]) {
      result[result.length-1][1] = el[1];
    } else if (el[0] < result[result.length-1][0]) {
      result[result.length-1] = el;
    }

    if (intervalToMerge[0] > result[result.length-1][1]) {
      result.push(intervalToMerge);
    } else if (intervalToMerge[1] > result[result.length-1][1] && intervalToMerge[1] > result[result.length-1][1]) {
      result[result.length-1][1] = intervalToMerge[1];
    }
  });

  return result;
}

function findWordInBoard(grid, string) {
  let gridHash = {};
  let stringHash = {};
  let currentLetter = '';
  let inGrid = true;

  grid.forEach((a,i1) => {
    a.forEach((b,i2) => {
      currentLetter = grid[i1][i2];
      if (gridHash[currentLetter]) {
        gridHash[currentLetter] = gridHash[currentLetter] + 1;
      } else {
        gridHash[currentLetter] = 1;
      }
    });
  });

  Array.from(string).forEach(letter => {
    if (stringHash[letter]) {
      stringHash[letter] = stringHash[letter] + 1;
    } else {
      stringHash[letter] = 1;
    }
  });

  Object.keys(stringHash).forEach(letter => {
    if (!gridHash[letter] || gridHash[letter] < stringHash[letter]) {
      inGrid = false;
    }
  });

  return inGrid;
}

function sumTwoNumbers(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return sumTwoNumbers(a ^ b, (a & b) << 1);
  }
}
