var arr = [0, 1];
var n = +prompt('Enter value N:');
if (n > 1) {
    var i = 1;
    var f = 1;
    while (i < n) {
        f = arr[i] + arr[i-1];
        arr.push(f);
        i++;
    }
alert(arr);
} else alert('Incorrect value. N must bu number and > 1 !'); 
