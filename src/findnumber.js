// findnumber.js

function findNumber(x,y) {
  for (var i = 0; i < x.length; i++) {
    if(x[i] === y) {
      return 'YES';
    }
  }
  return 'NO';
}

findNumber([1,2,3,4,5],10);
