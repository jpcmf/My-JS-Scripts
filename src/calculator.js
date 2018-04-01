// calculator.js

function calculator(operator) {
  return function(x, y) {

    var result;

    switch(operator) {
      case '+' :
        result = x + y;
        break;
      case '-' :
        result = x - y;
        break;
      case '*' :
        result = x * y;
        break;
      case '/' :
        result = x / y;
        break;
      case '%' :
        result = x % y;
        break;
      default :
        return 'Invalid operation!';
    }
    return 'The result of operation ' + x + ' ' + operator + ' ' + y + ' is ' + result + ' !';
  };
}

var sum = calculator('+');
console.log(sum(10,20));

var subtraction = calculator('-');
console.log(subtraction(100,50));

var multiplication = calculator('*');
console.log(multiplication(200,100));

var division = calculator('/');
console.log(division(10,1));

var mod = calculator('%');
console.log(mod(20,30));
