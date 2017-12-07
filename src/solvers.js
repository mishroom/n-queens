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
  // console.log('in find n rooks', n);
  var board = this.Board.prototype;
  var storage = [];
  // console.log("this", this);
  var matrix = [];
  
  for (var i = 0; i < n; i++) {
    var miniArr = [];
    for (var j = 0; j < n; j++) {
      miniArr.push(0);
    }
    matrix.push(miniArr);
  }
  // matrix[0][0] = 1;
  console.log(matrix);

  //create a function to iterate and find conclicts and/or place rooks
  // var placeRooks = function (index) {
    //index is a colun index specific to row 1 (ie matrix[0]);
    //check if there is a conflict with functions already defined
    
    // var location = [0][index];
    //place a rook at index
    
    //starting rook
  //   var c = index;
  //   matrix[0][c] = 1;
    
  //   for (var r = 0; r < n; r++) {
  //     for (var c = 0; c < n; c++) {
  //       matrix[r][c] = 1;
  //       console.log("matrix before checking conflict",matrix);
  //       if (this.Board.prototype.hasAnyRooksConflicts) {
  //         matrix[r][c] = 0;
  //       }
        
  //       console.log("matrix after checking conflict",matrix);
  //     }
  //   }   
  // };
  // placeRooks(0);
  // //figure out an arbitrary starting index
  // // for (var c = 0; c < matrix[0].length; c++) {
  // //   //passing in a column index specifically on row 1
  // // }
      
  // // console.log("matrix",matrix);
  
  //first build the nxn matrix ##
  //inside the matrix, we need to find where we can put the rooks such that there are no conflicts
  //store the solutions (ie matrix) into a storage array
  //'solution' would be the first index of the storage array
  //conflicts would be : vertical and horizontal, not diagonal
   //if no conflict, add rook to board, return
    // if yes conflict ... do nothing? tbd? figure out iteration?
  
  
 var solution = undefined; //fixme
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return stroage[0];
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
