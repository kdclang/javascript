var n = 600851475143;
var m = Math.ceil(Math.sqrt(n));
prime = false;

function isPrime(x){
    var i = Math.ceil(Math.sqrt(x));
    do {
    if (x %i == 0) {
        return false;
    }
    else {
        i-= 1;
    }
    }
    while (i>1);
    return true;
}
while (m>1 && !prime) {
    if (n%m == 0) {
        console.log("factor is "+ m);
        if (isPrime(m)) {
            console.log("largest prime factor is "+m);
            prime = true;
        }
        else {
            m -= 1;
        }
    } 
    else {
        m -= 1;
    }
}
console.log(1);