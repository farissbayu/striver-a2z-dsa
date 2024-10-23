function pattern1(size) {
  console.log("Pattern 1");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern2(size) {
  console.log("Pattern 2");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern3(size) {
  console.log("Pattern 3");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((j + 1).toString());
    }
    console.log();
  }
  console.log();
}

function pattern4(size) {
  console.log("Pattern 4");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((i + 1).toString());
    }
    console.log();
  }
  console.log();
}

function pattern5(size) {
  console.log("Pattern 5");
  for (let i = size; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern6(size) {
  console.log("Pattern 6");
  for (let i = size; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write((j + 1).toString());
    }
    console.log();
  }
  console.log();
}

function pattern7(size) {
  console.log("Pattern 7");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = size; j < 2 * size - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
  console.log();
}

function pattern8(size) {
  console.log("Pattern 8");
  for (let i = 0; i < size; i++) {
    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // star
    for (let j = 0; j < 2 * size - 2 * i - 1; j++) {
      process.stdout.write("*");
    }

    // space
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
  console.log();
}

function pattern9(size) {
  console.log("Pattern 9");

  // top triangle -> pattern 7
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < size - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }

  // bottom triangle -> pattern 8
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 0; j < 2 * size - 2 * i - 1; j++) {
      process.stdout.write("*");
    }

    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }

  console.log();
}

function pattern10(size) {
  console.log("Pattern 10");
  console.log("My solution");
  for (let i = 0; i < 2 * size - 1; i++) {
    if (i < size) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
      }
    } else {
      for (let j = i; j < 2 * size - 1; j++) {
        process.stdout.write("*");
      }
    }
    console.log();
  }
  console.log();

  // Striver's solution
  console.log("Striver's solution");
  for (let i = 1; i <= 2 * size - 1; i++) {
    let stars = i;
    if (i >= size) stars = 2 * size - i;
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log();
}

function pattern11(size) {
  console.log("Pattern 11");
  console.log("My solution");
  for (let i = 0; i < size; i++) {
    let counter = i % 2 === 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      process.stdout.write((counter % 2).toString() + " ");
      counter++;
    }
    console.log();
  }
  console.log();

  // Striver's solution
  /**
   * identify first col every row
   *
   * odd row start with 1
   * even row start with 0
   *
   * flip start every turn
   * start = 1 - start;
   *
   * -> if prevStart = 1 -> start = 1 - 1 = 0;
   * -> if prevStart = 0 -> start = 1 - 0 = 1;
   *
   * it's flipping, fckin genius striver
   */
  console.log("Striver's solution");
  let start;
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) start = 0;
    else start = 1;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(start.toString() + " ");
      start = 1 - start;
    }
    console.log();
  }
  console.log();
}

function pattern12(size) {
  console.log("Pattern 12");
  for (let i = 1; i <= size; i++) {
    // nums left
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }

    // space
    for (let j = 1; j <= 2 * size - 2 * i; j++) {
      process.stdout.write(" ");
    }
    // nums right
    for (let j = i; j >= 1; j--) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
  console.log();
}

function pattern13(size) {
  console.log("Pattern 13");

  let sum = 1;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(sum.toString() + " ");
      sum++;
    }
    console.log();
  }
  console.log();
}

function pattern14(size) {
  console.log("Pattern 14");

  const baseCode = 64;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      const charCode = baseCode + j;
      process.stdout.write(String.fromCharCode(charCode) + " ");
    }
    console.log();
  }
  console.log();
}

function pattern15(size) {
  console.log("Pattern 15");

  const baseCode = 64;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size - i + 1; j++) {
      const charCode = baseCode + j;
      process.stdout.write(String.fromCharCode(charCode) + " ");
    }
    console.log();
  }
  console.log();
}

function pattern16(size) {
  console.log("Pattern 16");

  const baseCode = 64;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      const charCode = baseCode + i;
      process.stdout.write(String.fromCharCode(charCode) + " ");
    }
    console.log();
  }
  console.log();
}

function pattern17(size) {
  console.log("Pattern 17");

  const baseCode = 64;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      const charCode = j <= i ? baseCode + j : baseCode + (2 * i - j);
      process.stdout.write(String.fromCharCode(charCode));
    }
    for (let j = 1; j <= size - i; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
  console.log();
}

function pattern18(size) {
  console.log("Pattern 18");

  const baseCode = 64;
  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      const charCode = baseCode + size - j;
      process.stdout.write(String.fromCharCode(charCode) + " ");
    }
    console.log();
  }
  console.log();
}

function pattern19(size) {
  console.log("Pattern 19");

  for (let i = 0; i < 2 * size; i++) {
    const stars = i < size ? size - i : i - size + 1;

    // start left
    for (let j = 0; j < stars; j++) {
      process.stdout.write("*");
    }

    // space
    const space = i < size ? 2 * i : 2 * (2 * size - i - 1);
    for (let j = 0; j < space; j++) {
      process.stdout.write(" ");
    }

    // stars right
    for (let j = 0; j < stars; j++) {
      process.stdout.write("*");
    }

    console.log();
  }
  console.log();
}

function pattern20(size) {
  console.log("Pattern 20");

  for (let i = 0; i < 2 * size - 1; i++) {
    const stars = i < size ? i : 2 * size - i - 2;

    // stars left
    for (let j = 0; j <= stars; j++) {
      process.stdout.write("*");
    }

    // space
    const space = i < size ? 2 * size - 2 * (i + 1) : 2 * (i - size + 1);
    for (let j = 0; j < space; j++) {
      process.stdout.write(" ");
    }

    // stars right
    for (let j = 0; j <= stars; j++) {
      process.stdout.write("*");
    }

    console.log();
  }
  console.log();
}

function pattern21(size) {
  console.log("Pattern 21");

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (j === 0 || j === size - 1 || i === 0 || i === size - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
  console.log();
}

function pattern22(size) {
  console.log("Pattern 22");

  for (let i = 0; i < 2 * size - 1; i++) {
    for (let j = 0; j < 2 * size - 1; j++) {
      // distance to
      const top = i;
      const left = j;
      const bottom = 2 * size - 2 - i;
      const right = 2 * size - 2 - j;

      // num = size - min of all distance
      const num = size - Math.min(Math.min(top, bottom), Math.min(left, right));

      process.stdout.write(num.toString());
    }
    console.log();
  }
  console.log();
}

function main() {
  pattern1(5);
  pattern2(5);
  pattern3(5);
  pattern4(5);
  pattern5(5);
  pattern6(5);
  pattern7(5);
  pattern8(5);
  pattern9(5);
  pattern10(5);
  pattern11(5);
  pattern12(5);
  pattern13(5);
  pattern14(5);
  pattern15(5);
  pattern16(5);
  pattern17(5);
  pattern18(5);
  pattern19(5);
  pattern20(5);
  pattern21(5);
  pattern22(5);
}

main();
