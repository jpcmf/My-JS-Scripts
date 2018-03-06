// oddNumbers.js

function oddNumbers(x,y) {
  var arr = [];
  for (var i = x; i <= y; i++) {
    if(i % 2 !== 0) {
      console.log('ímpar: ' + i)
    } else {
      arr.push(i);
    }
  }
  return arr;
}

var arr = oddNumbers(1,11);
