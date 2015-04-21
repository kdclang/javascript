var fib1 = 1;
var fib2 = 2;
var temp = 0;
sum = 0;
while (fib1 < 4000000 && fib2 < 4000000) {
    if (fib2 % 2 == 0) {
        sum += fib1;
    }
    
    temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
}
console.log(sum);