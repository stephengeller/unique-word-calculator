class PrimeChecker {
  checkIfPrime(n) {
    if (n < 2) return false;
    const limit = Math.sqrt(n);
    for (var i = 2; i <= limit; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

module.exports = PrimeChecker;
