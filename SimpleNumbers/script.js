var field = document.getElementById('field');
var btn = document.getElementById('btn');

function isPrime(n) {
    var k;
    debugger;
    for (k = 2; k * k <= n; k++) {
        if (n % k == 0) {
            return false;
        }
    }
    return true;
}
btn addEventListener('click', function () {
    var n;
    alert(isPrime(n));
});
