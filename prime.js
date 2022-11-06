let prime = (num) => {
  for (var i = 2; i <= num ** 0.5; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}

let num = 43;
prime(num) ? console.log(num, "is prime") : console.log(num, "is not prime");