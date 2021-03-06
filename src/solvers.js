/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other




// make a version of permutations that gets a coordinate list of the queens for the board
// then use the column values with hasAnyConflicts

// make another function to generate a new Board with the values for this coordinate system

// window.getAlpha = function(n) {
//   let arr = []; // an array of tuples
//                 // the tuples hold the coordinates
// }


// make a version of permutations that gets an array of the order of the column indices
// then use the column indices array as an argument for hasAnyConflicts
// if passes, then add that permutation

window.getAlpha = function(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
};


// OPTIMIZATION: where n % 2 === 0, you only have to go half way through, then double it (due to symmetry)
window.getColumnIndicesArrayPermutations = function(n) {
  const results = []; 
  const array = getAlpha(n);

  var indices = []; 
  for (let i = 0; i < n; i++) {
    indices[i] = 0; 
  }
  
  for (let i = 0; i < n; ) {
    if (indices[i] < i) {
      if (i % 2 === 0) {
        // swap((0, i, array));
        // it's unclear why, but the above function call does not work properly
        // the below code functions correctly
        var swapSpace = array[0]; 
        array[0] = array[i]; 
        array[i] = swapSpace; 
      } else {
        swap(indices[i], i, array); 
      }
      var current = array.slice(); 

      if (!hasAnyConflicts(current)) {
        results.push(current);
      }

      indices[i] += 1; 
      i = 0;  
    } else {
      indices[i] = 0;
      i++; 
    }
  }
  return results; 
};


window.getFirstQueenSolution = function(n) {
  const array = getAlpha(n);

  var indices = []; 
  for (let i = 0; i < n; i++) {
    indices[i] = 0; 
  }
  
  for (let i = 0; i < n; ) {
    if (indices[i] < i) {
      if (i % 2 === 0) {
        // swap((0, i, array));
        // it's unclear why, but the above function call does not work properly
        // the below code functions correctly
        var swapSpace = array[0]; 
        array[0] = array[i]; 
        array[i] = swapSpace; 
      } else {
        swap(indices[i], i, array); 
      }
      var current = array.slice(); 

      if (!hasAnyConflicts(current)) {
        return current;
        // results.push(current);
      }

      indices[i] += 1; 
      i = 0;  
    } else {
      indices[i] = 0;
      i++; 
    }
  }
  return ['No valid solutions', n]; 
};



var versionB = function(n) {
  var board = []; 
  for (var i = 0; i < board.length; i++) {
    board.push(i);  
  }
  var perms = permutations(board);
  var master = [];
  for (var i = 0; i < perms.length; i++) {
    var current = perms[i];
    if (!hasAnyConflicts(current)) {
      master.push(current);
    }
  }
  return master; 
};

var hasAnyConflicts = function(arr) {
  for (var i = 0; (i + 1) < arr.length; i++) {
    for (var j = (i + 1); j < arr.length; j++) {
      if (Math.abs(arr[j] - arr[i]) === (j - i)) {
        return true; 
      }
    }
  }
  return false; 
}; 

console.log(hasAnyConflicts([1, 3, 0, 2]));
console.log(hasAnyConflicts([0, 3, 1, 2])); 





// this is a helper function, it swaps 2 elements, at given indexes, in an array
window.swap = function(index1, index2, array) {
  var swapSpace = array[index1]; 
  array[index1] = array[index2]; 
  array[index2] = swapSpace; 
};

// this function returns a 'first' case, for the possible placements of pieces on a board
// it is in the format of an array of arrays
window.getFirstCase = function(n) {
  const array = []; 
  
  // an array filled with n elements that are all 0's
  const row = (new Array(n)).fill(0);

  // initialize all of the elements in the array to 0
  for (let i = 0; i < n; i++) {
    array.push(row.slice());
  }

  // set a base case pattern where pieces are placed
  for (let i = 0; i < n; i++) {
    array[i][i] = 1; 
  }

  return array; 
};

// creates an array of every permutation for a board of size n
// has an optional validator parameter, which is a function that returns true if a particular board is valid
// rooks does not use the validator, but queens need it
window.permutations = function(n, validator) {
  const results = []; 

  const array = getFirstCase(n);

// debugger;  // if this is for rooks
  if (validator === undefined) { 
    results.push(array.slice());
  }

  // const n = array.length; 
  var indices = []; 
  for (let i = 0; i < n; i++) {
    indices[i] = 0; 
  }
  
  for (let i = 0; i < n; ) {
    if (indices[i] < i) {
      if (i % 2 === 0) {
        // swap((0, i, array));
        // it's unclear why, but the above function call does not work properly
        // the below code functions correctly
        var swapSpace = array[0]; 
        array[0] = array[i]; 
        array[i] = swapSpace; 
      } else {
        swap(indices[i], i, array); 
      }
      var current = array.slice(); 

      // if this is for rooks
      if (validator === undefined) {
        results.push(current);
      } else { // this is for queens
        if (validator(current)) {

          // alternative 
          // instead of validating first,
          // push then use web workers to validate
            // on every 1000th push to the results array or something

          results.push(current);
        }
      }
      indices[i] += 1; 
      i = 0;  
    } else {
      indices[i] = 0;
      i++; 
    }
  }
  return results; 
}; // end of permutations = function(n, validator)


// NOTE: this function expects the return value to be an array or arrays, not a Board object
window.findNRooksSolution = function(n) {
  const solution = getFirstCase(n);
  
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));  
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  return permutations(n).length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  if (n < 1) {
    return [];
  } else if (n === 1) {
    return [[1]];
  } else if (n === 2) {
    return [[0, 0], [0, 0]]; 
  } else if (n === 3) {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; 
  }


  const singleArray = getFirstQueenSolution(n);

  const matrix = [];

  // generate a matrix from singleArray
  for (let i = 0; i < n; i++) {
    const thisRow = (new Array(n)).fill(0);
    
    thisRow[singleArray[i]] = 1;

    matrix.push(thisRow);
  }

  return matrix;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n < 2) {
    return 1;
  } else if ((n === 2) || (n === 3)) {
    return 0;
  }

  const solutionCount = getColumnIndicesArrayPermutations(n).length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};




