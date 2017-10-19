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


// general solver function goes here
window.swap = function(index1, index2, array) {
  var swapSpace = array[index1]; 
  array[index1] = array[index2]; 
  array[index2] = swapSpace; 
};

window.getFirstCase = function(n) {
  let array = [[]]; 
  for (var i = 0; i < n; i++) {
    for (var l = 0; l < n; l++) {
      array[i][l] = 0; 
    }
  }

  for (var i = 0; i < n; i++) {
    array[i][i] = 1; 
  }

  return array; 
};

window.permutations = function(n, validator) {
  var results = []; 
  
  let array = getFirstCase(n);

  if (validator === undefined) { 
    results.push(array.slice());
  }
  const n = array.length; 
  var indices = []; 
  for (let i = 0; i < n; i++) {
    indices[i] = 0; 
  }
  
  for (let i = 0; i < n; ) {
    if (indices[i] < i) {
      if (i % 2 === 0) {
        swap((0, i, array));
      } else {
        swap(indices[i], i, array); 
      }
      var current = array.slice(); 


      if (validator === undefined) {
        results.push(current);
      } else {
        if (validator(current)) {
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
};


window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); 
  let s = solution; // less typing

  for (let i = 0; i < n; i++) {
    s.togglePiece(i, i);
  }

  let arr = [];

  // convert s.attributes to an array
  for (let i = 0; i < n; i++) {
    arr.push(s.attributes[i]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(arr));
  return arr;
};

// helper function
// make an array into a number (for simple comparison)
const toNumber = function(arr) {
// do stuff here
// return number
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var first = [];
  for (var i = 0; i < n; i++) {
    first.push(i);
  } 
   
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
