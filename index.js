var fibonacciArray = [0, 1];
var number = +prompt('Enter value N:');
if (number > 1) {
    var i = 1;
    var fibonacci = 1;
    while (i < number) {
        fibonacci = fibonacciArray[i] + fibonacciArray[i-1];
        fibonacciArray.push(fibonacci);
        i++;
    }
alert('Fibonacci number: '+fibonacciArray);
} else alert('Incorrect value. N must bu number and > 1 !'); 
