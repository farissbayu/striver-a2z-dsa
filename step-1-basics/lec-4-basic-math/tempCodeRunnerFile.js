  let small = Math.min(a, b);
  let big = Math.max(a, b);

  let gcd = 0;
  let lcm = big;

  // gcd using euclidian algorithm
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }

  // iterative lcm
  while (lcm % small !== 0) {
    lcm += big;
  }

  // simple lcm calc
  // lcm = a * b / gcd;

  gcd = Math.max(a, b);

  return [lcm, gcd];