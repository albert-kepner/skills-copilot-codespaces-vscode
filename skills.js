// Determine whether two numbers var1, var2 are relatively prime
calculateNumbers = function (var1, var2) {
    var gcd = function(a, b) {
        if (b < 0.0000001) return a;
        return gcd(b, Math.floor(a % b));
    };
    return gcd(var1, var2) === 1;  
}

module.exports = calculateNumbers;