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
  let ns = n * n; // n Squared
  let solutionCount = 0;
  let solutions = []; // solutions.push(toNumber(solution));

  // base case (to work off of)
  var base = new Board({'n': n}); 
  
  for (let i = 0; i < n; i++) {
    base.togglePiece(i, i);
  }

  let arr = [];

  // convert s.attributes to an array
  for (let i = 0; i < n; i++) {
    arr.push(base.attributes[i]);
  }
  

  // use the base case to generate the rest of the possibilities
  let combos = [];




  return combos.length;

  // // different starting positions
  // for (let i = 0; i < ns; i++) {
  //   let row = Math.floor(i / n);
  //   let column = i % n;

  //   let pushedTo = {};
  //   // pushedTo.x = [];
  //   pushedTo.y = [];

  //   // each row
  //   for (let j = 0; j < n; j++) {
  //     if (pushedTo.y.indexOf(j) !== -1) {
  //       // try it
        
  //       // if found
  //       // test against currently stored solutions
  //       //   if unique, push it to the solutions array
  //       //    increment solutionsCount        
  //     } else {
  //       pushedTo.y.push(j);
  //       // don't try it
  //       continue;
  //     }
  //     // different rows
  //     for (let k = 0; k < n; k++) {

  //     }
      
  //   }

  //   // validate the current solution
  //   //   solutionCount++;
  // }



  // var solutionCount = n; 
  // if (n <= 1) {
  //   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // } else {
  //   for (let l = (n - 1); l > 0; l--) {
  //     solutionCount = (solutionCount * l);
  //   }
  //   console.log('Number of solutions for ' + n );
  // }
  return solutionCount;
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
