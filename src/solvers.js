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

  // if this is for rooks
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
  }

  console.log('Inside of findNQueensSolution');
  console.log('n:', n);

  // if there is time, replace this, with a method that would only find 1 solution, instead of them all
  var solution = permutations(n, function(board) {
    // this is the validator function
    // board is an array of arrays    

    let thisBoard = new Board(board);
    return thisBoard.hasAnyMajorDiagonalConflicts() && thisBoard.hasAnyMinorDiagonalConflicts;
    // return true;
  });

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = permutations(n, function(board) {
    // this is the validator function
    // board is an array of arrays    

    let thisBoard = new Board(board);
    return thisBoard.hasAnyMajorDiagonalConflicts() && thisBoard.hasAnyMinorDiagonalConflicts;
    // return true;
  }).length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
